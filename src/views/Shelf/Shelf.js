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
import { getAllShelf, insertShelf } from "src/api/apiShelf";
import ShelfTable from "./shelfTable";

export default function Shelf() {
  const page_name = "Shelf";
  const [show, setShow] = useState(false);
  const [shelf, setShelf] = useState([]);
  const [values,setValues] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertShelf (values)
      .then(response => {
        if(response.status === 200){
          alert("Shelf uploaded");
          setShow(false);
          window.location.reload();
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllShelf()
    .then(response => setShelf(response.data))
    .catch(err => alert("Something went wrong!"))
},[])
  return (
    <div>
      {/* Modal Start */}
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        Add New Category
      </Button>

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
        
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">{`${page_name} Name`}</CLabel>
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
                        <CLabel htmlFor="selectLg">Warehouse</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                        <CSelect name="status" custom size="lg" id="selectLg">
                          <option value="">Warehouse</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectLg">Status</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                        <CSelect name="status" custom size="lg" id="selectLg" onChange={handleChange}>
                          <option value="">Status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </CSelect>
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
                      <th scope="col" width="15%">Shelf Name</th>
                      <th scope="col" width="15%">Warehouse</th>
                      <th scope="col" width="15%">Status</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {shelf.map((item, i) => <ShelfTable
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
