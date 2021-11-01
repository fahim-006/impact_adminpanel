import React from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deletebuyphaseById, getbuyphaseById, updatebuyphaseById } from "src/api/apiBuyPhase";


const BuyPhaseTable = ({item}) => {
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false); 
    const [buyphasebyid, setbuyphasebyid] = useState({
        id: '',
        phaseNo: '',
        tokenNo: '',
        price: '',
        tax: '',
        min_buy: '',
        max_buy: '',
        day: '',
        month: '',
        year: '',
        hour: '',
        min: '',
        sec: ''
        });

    const {
        id,
        phaseNo,
        tokenNo,
        price,
        tax,
        min_buy,
        max_buy,
        day,
        month,
        year,
        hour,
        min,
        sec
    } = buyphasebyid;
    
    const handleClose = () => setShow(false);
    const handleShow = (id) =>{
        //alert(id)
        getbuyphaseById(id)
        .then(response => setbuyphasebyid(response.data))
        .catch(err => alert("something went wrong"))
        setShow(true);
    }
    
    const handleDelete = (id) => {
        deletebuyphaseById(id)
        .then(
            alert(" Deleted"),
            window.location.reload()
        )
        .catch(err=> alert("Something Went Wrong!"))
    }
    const handleChange = (e) => {
        setbuyphasebyid({
           ...buyphasebyid,
           [e.target.name]: e.target.value
       }
       )
    }

    const handleSubmit = (e) => {
        updatebuyphaseById(buyphasebyid, id)
            .then(response => {
                if(response.status === 200){
                    alert("updated");
                    setRedirect(true)
                }
            })
    }

    const profileForm = ()  => (
        <form onSubmit={handleSubmit}>
        <label>Phase No</label>
        <select name="phaseNo" value={phaseNo} onChange={handleChange}>
            <option value="none">None</option> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
         <input
            type="text"
            name="tokenNo"
            value={tokenNo}
            className="form-control"
            onChange={handleChange}
            required/>
        <br/>
        <label>Token</label>
        <input
            type="text"
            name="tokenNo"
            value={tokenNo}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>price</label>
        <input
            type="text"
            name="price"
            value={price}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>tax</label>
        <input
            type="text"
            name="tax"
            value={tax}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>min buy</label>
        <input
            type="text"
            name="min_buy"
            value={min_buy}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>max_buy</label>
        <input
            type="text"
            name="max_buy"
            value={max_buy}
            className="form-control"
            onChange={handleChange}
            required/>

        <label>day</label>
        <select name="day" value={day} onChange={handleChange}>
            <option value="none">None</option> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>

        <label>month</label>
        <select name="month" value={month} onChange={handleChange}>
            <option value="none">None</option> 
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
        </select>

        <label>year</label>
        <input
            type="text"
            name="year"
            value={year}
            placeholder="2021"
            className="form-control"
            onChange={handleChange}
            required/>

        <label>hour</label>
        <input
            type="text"
            name="hour"
            value={hour}
            placeholder="15"
            className="form-control"
            onChange={handleChange}
            required/>

        <label>min</label>
        <input
            type="text"
            name="min"
            value={min}
            placeholder="12"
            className="form-control"
            onChange={handleChange}
            required/>

        <label>sec</label>
        <input
            type="text"
            name="sec"
            value={sec}
            placeholder="00"
            className="form-control"
            onChange={handleChange}
            required/>

        
    </form>   
    )
    
    return (
        <>
        
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Details</Modal.Title>
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
      {redirect ? window.location.replace("/buyphase"): ""}
        <tr>
            <td>{item.phaseNo}</td>
            <td>{item.tokenNo}</td>

            <td>{item.price}</td>
            <td>{item.tax}</td>
            <td>{item.min_buy}</td>
            <td>{item.max_buy}</td>
            <td>{item.day}/{item.month}/{item.year}; 
            {item.hour}:{item.min}:{item.sec}
            </td>
        
            <td>
                   
                    <svg onClick={()=>handleShow(item.id)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/></svg>
                   {/*
                    <svg onClick={()=>handleDelete(item.id)} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                   */}
            </td>
        </tr>
        </>
    );
}

export default BuyPhaseTable;