import { useState } from "react";
import React, { useEffect } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  // CBadge,
  // CDataTable,
  // CCollapse,
  // CDropdownItem,
  // CDropdownMenu,
  // CDropdownToggle,
  // CFade,
  CForm,
  CFormGroup,
  // CFormText,
  // CValidFeedback,
  // CInvalidFeedback,
  // CTextarea,
  CInput,
  // CInputFile,
  // CInputCheckbox,
  // CInputRadio,
  // CInputGroup,
  // CInputGroupAppend,
  // CInputGroupPrepend,
  // CDropdown,
  // CInputGroupText,
  CSelect,
  CLabel,
  // CSelect,
  CRow,
  // CSwitch,
} from "@coreui/react";
import { Modal, Button } from "react-bootstrap";
import CIcon from "@coreui/icons-react";
import { getAllGroup, insertGroup } from "src/api/apiGroups";
import { Redirect } from "react-router";
import GroupTable from "./GroupTable";


export default function Add_group() {
  const page_name = "Group";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [values,setValues] = useState({});
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertGroup (values)
      .then(response => {
        if(response.status === 200){
          window.location.reload();
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }


  return (
    <div>
     
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Click to add a new group</CCardHeader>
            <Button className="mb-3" variant="primary" onClick={handleShow}>
        {`Add New ${page_name}`}
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
          
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Select Group Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Select Group Name
"
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            <GroupTable/>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
