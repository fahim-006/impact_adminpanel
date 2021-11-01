import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import BrandTable from "./BrandTable";
import { insertSocial, getAllSocial} from "src/api/apiBrand";

export default function Brand({history} ) {
  const page_name = "Social Links";
  const [show, setShow] = useState(false);
  const [brand, setBrand] = useState([]);
  const [values,setValues] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [redirect, setRedirect] = useState(false);
  const loginCheck =    localStorage.getItem('emailofadmin');
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertSocial(values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
      })
      .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllSocial()
      .then(response => setBrand(response.data))
      .catch(err => alert("Something went wrong!"))
  },[])

  return (
    <div>
      {/* Modal Start */}
      
      {redirect ? window.location.replace("/social") : ""}

      {/* 
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        {`Add New ${page_name}`}
      </Button>
      */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {`Fill ${page_name} Details`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form Start */}
          <CRow>
            <CCol>
              <CCard>
                <CCardBody>
                  <CForm
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <p>List - facebook, youtube, btok, telegram, discord, instagram, reddit, twitter</p>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input" style={{color: "red"}}>{`${page_name} Name (Copy a name from the list)`}</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name"
                          name="name"
                          onChange={handleChange}
                          placeholder={`${page_name} Name`}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectLg">Link</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <p style={{color: "red"}}>Copy the link from your browser</p>
                        <CInput
                          type="URL"
                          id="details"
                          name="details"
                          onChange={handleChange}
                          placeholder={`${page_name}`}
                        />
                      </CCol>

                    </CFormGroup>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          {/* Form End */}
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
      {/* Modal End */}
      <div className="container my-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                      <th scope="col" width="15%">Name</th>
                      <th scope="col" width="15%">Link</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {brand.map((item, i) => <BrandTable
                          item={item}
                          key={item._id} 
                          />   
                    )}
                </tbody>
            </table>
            
         </div>
    </div>
  );
}
