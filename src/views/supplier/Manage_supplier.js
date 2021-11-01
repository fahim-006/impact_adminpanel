import React, { Component, useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SupplierTable from "./SupplierTable";
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
} from "@coreui/react";
import { insertSupplier, getAllSupplier, insertTerms, getAllTerms} from "src/api/apiSupplier";

export default function Manage_supplier() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [supplier, setSupplier] = useState([]);
  const [values,setValues] = useState({});

  const [redirect, setRedirect] = useState(false);
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    insertTerms(values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }

  const inputHandler = (event, editor) => {
  
      setValues({
        ...values,
        ["details"] : editor.getData(),
      })
};

  useEffect(()=>{
    getAllTerms()
    .then(response => setSupplier(response.data))
    .catch(err => alert("Something went wrong!"))
  },[])
  
  return (
    <div>
      {redirect ? window.location.replace("/terms"): ""}
      {/* Modal Start */}
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        Add New Terms paragraph
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Terms Details</Modal.Title>
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
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Headline</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name"
                          name="name"
                          placeholder="Headline"
                          onChange={handleChange}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Details</CLabel>
                      </CCol>
                     
                      <CKEditor
                    editor={ ClassicEditor }
                    name="details"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ inputHandler }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                       <CCol xs="12" md="9">
                      
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
                      <th scope="col" width="15%">Headline</th>
                      <th scope="col" width="15%">Details</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {supplier.map((item, i) => <SupplierTable
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
