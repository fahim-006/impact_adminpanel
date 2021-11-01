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
} from "@coreui/react";
import { insertCustomer, getAllCustomers } from "src/api/apiCustomer";
import CustomerTable from "./CustomerTable";

export default function Customer({history}) {
  const [show, setShow] = useState(false);
  const [values,setValues] = useState({});
  const [customers, setCustomers] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertCustomer(values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
      
  }

  useEffect(()=>{
      getAllCustomers()
      .then(response => setCustomers(response.data))
      .catch(err => alert("Something went wrong!"))
  },[])

  return (
    <div>
      {/* Modal Start */}
      {redirect ? history.push('/customer'): ""}
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        Add New Customer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Customer Details</Modal.Title>
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
                        <CLabel htmlFor="text-input">Full Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          onChange={handleChange}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Mobile No</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="phoneNo"
                          name="phoneNo"
                          placeholder="Mobile No"
                          onChange={handleChange}
                        />
                      </CCol>
                    </CFormGroup>


                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Deposit</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="deposite"
                          name="deposite"
                          placeholder="Deposit"
                          onChange={handleChange}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="email-input">Email Input</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          autoComplete="email"
                          onChange={handleChange}
                        />
                        <CFormText className="help-block">
                          Please enter your email
                        </CFormText>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Address</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="address"
                          id="address"
                          rows="9"
                          placeholder="Address"
                          onChange={handleChange}
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
                      <th scope="col" width="15%">Email</th>
                      <th scope="col" width="15%">Phone</th>
                      <th scope="col" width="15%">Deposit</th>
                      <th scope="col" width="15%">Address</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item, i) => <CustomerTable
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
