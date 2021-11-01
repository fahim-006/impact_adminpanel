import React from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteCategoryById, deleteCauseById, getCategoryById, getCauseById, updateCategoryById, updateCauseById } from "src/api/apiCategory";

const CategoryTable = ({item}, props) => {
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false); 
    const [categorybyid, setcategorybyid] = useState({
        id: '',
        name: '',
        rename: "",
        name1: '',
        details: '',
        });

    const {
        id,
        name,
        rename,
        name1,
        details
    } = categorybyid;

    const handleClose = () => setShow(false);
    const handleShow = (id) =>{
        //alert(id)
        getCauseById(id)
        .then(response => setcategorybyid(response.data))
        .catch(err => alert(err.message))
        setShow(true);
    }
    
    const handleDelete = (id) => {
        deleteCauseById(id)
        .then(
            alert(" Deleted"),
            window.location.reload()
        )
        .catch(err=> alert("Something Went Wrong!"))
    }
    const handleChange = (e) => {
        setcategorybyid({
           ...categorybyid,
           [e.target.name]: e.target.value
       }
       )
    }

    const handleSubmit = (e) => {
       updateCauseById(categorybyid, id)
            .then(response => {
                if(response.status === 200){
                    alert("updated");
                    window.location.reload();
                    setShow(false)
                      
                }
            })
          
    }

    const profileForm = ()  => (
        <form onSubmit={handleSubmit}>
        <label>Headline</label>
        <input
            type="text"
            name="name"
            value={name}
            disabled
            className="form-control"
            onChange={handleChange}
            required/>

        <label>Headline Rename</label>
        <input
            type="text"
            name="rename"
            value={rename}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>Headline 1</label>
        <input
            type="text"
            name="name1"
            value={name1}
            className="form-control"
            onChange={handleChange}
            required/>


         <label>Details</label>
         <textarea
            rows="15"
            type="text"
            name="details"
            value={details}
            className="form-control"
            onChange={handleChange}
            required/>

    </form>   
    )
    
    return (
        <>
        
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Cause Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profileForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {redirect ? window.location.replace("/cause"): ""}
        <tr>
            <td>{item.name}</td>
            <td>{item.rename}</td>
            <td>{item.name1}</td>
            <td>{item.details}</td>
            
            <td>
                   
                    <svg onClick={()=>handleShow(item.id)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/></svg>
                   
                {/* <svg onClick={()=>handleDelete(item.id)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>*/}    
              
            </td>
        </tr>
        </>
    );
}

export default CategoryTable