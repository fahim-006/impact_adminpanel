import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../base/tables/CustomersTable";
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
import { getAllCategory, getAllCause, insertCategory, insertCause } from "src/api/apiCategory";
import CategoryTable from "./CategoryTable";

export default function Category(props) {
  const page_name = "Cause";
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);
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
    insertCause(values)
    .then(response => {
      if(response.status === 200){
        alert("uploaded");
        window.location.reload();
        setShow(false);
      }
      
    })
    .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllCause()
    .then(response => setCategory(response.data))
    .catch(err => alert("Something went wrong!"))
},[])


  return (
    <div>
      {/* Modal Start 
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        Add New Cause
      </Button>
  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {`Fill ${page_name} Details`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form Start */}
          <p style={{color: "red"}}>Copy the headlines from the list</p>
                        <p style={{color: "red"}}>List: Impact.plant, 
                          Impact.animal, 
                          Impact.ocean, 
                          Impact.women,
                          Impact.school,
                          Impact.water,
                          Impact.wildlife.
                          Project-Tuvalu,
                          Eco-summit
                        </p>
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
                        <CLabel htmlFor="selectLg">Headline</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                      <CInput
                          id="name"
                          name="name"
                          onChange={handleChange}
                          placeholder={`${page_name} Name`}
                          disabled
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectLg">Rename</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                      <CInput
                          id="rename"
                          name="rename"
                          onChange={handleChange}
                          placeholder={`${page_name} Name`}
                        />
                      </CCol>
                    </CFormGroup>


                    <p style={{color: "red"}}>Headline2 example:Target Market cap $25M</p>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Headline 2</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name1"
                          name="name1"
                          onChange={handleChange}
                          placeholder={`headline 2`}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectLg">Details</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                      <CTextarea
                          id="details"
                          name="details"
                          onChange={handleChange}
                          placeholder={`${page_name} details`}
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
                      <th scope="col" width="15%"> Name</th>
                      <th scope="col" width="15%"> Headline Rename</th>
                      <th scope="col" width="15%">Headline 1</th>
                      <th scope="col" width="15%">Details</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((item, i) => <CategoryTable
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

