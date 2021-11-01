import React, { useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
import ImportTable from "./ImportTable";
import { insertImport, getAllImport, insertPolicy, getAllPolicy} from "src/api/apiImport";

export default function Import() {
  const page_name = "Policy";
  const [show, setShow] = useState(false);
  const [imports, setImports] = useState([]);
  const [values,setValues] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [redirect, setRedirect] = useState(false);
  const inputHandler = (event, editor) => {
  
    setValues({
      ...values,
      ["details"] : editor.getData(),
    })
};

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertPolicy(values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllPolicy()
    .then(response => setImports(response.data))
    .catch(err => alert("Something went wrong!"))
  },[])

  return (
    <div>
      {/* Modal Start */}
      {redirect ? window.location.replace("/policy") : ""}
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        {`Add New ${page_name}`}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Fill ${page_name} Details`}</Modal.Title>
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
                        <CLabel htmlFor="text-input">  Headline</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name"
                          name="name"
                          onChange={handleChange}
                          placeholder="Enter Headline"
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Details</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
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
                      <th scope="col" width="15%">Headlie</th>
                      <th scope="col" width="15%">Details</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {imports.map((item, i) => <ImportTable
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
