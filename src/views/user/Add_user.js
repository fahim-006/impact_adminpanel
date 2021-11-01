import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  // CCollapse,
  // CDropdownItem,
  // CDropdownMenu,
  // CDropdownToggle,
  // CFade,
  CForm,
  CFormGroup,
  CFormText,
  // CValidFeedback,
  // CInvalidFeedback,
  CTextarea,
  CInput,
  // CInputFile,
  // CInputCheckbox,
  // CInputRadio,
  // CInputGroup,
  // CInputGroupAppend,
  // CInputGroupPrepend,
  // CDropdown,
  // CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  // CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { insertUser } from "src/api/apiUser";

const Add_user = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    address: '',
    phoneNo: '',
    nid: '',
    backAcc: '',
    details: ''
  })


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertUser(values)
      .then(response => {
        if(response.status === 200){
          alert("User inserted!");
        }
      })
      .catch(err => alert(err.message))

     
  }
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Please Fill This Form</CCardHeader>
            <CCardBody>
              <CForm
                action=""
              
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectLg">Select Large</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">User Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      onChange={handleChange}
                      name="userName"
                      placeholder="User Name"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="firstName"
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="address"
                      placeholder="Address"
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
                      id="number-input"
                      name="phoneNo"
                      onChange={handleChange}
                      placeholder="Mobile No"
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
                      id="email-input"
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter Email"
                      autoComplete="email"
                    />
                    <CFormText className="help-block">
                      Please enter your email
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">NID No</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="number-input"
                      onChange={handleChange}
                      name="nid"
                      placeholder="NID No"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Bank Account / M Cash</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="number-input"
                      name="backAcc"
                      onChange={handleChange}
                      placeholder="Bank Account / M Cash"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="password-input"
                      onChange={handleChange}
                      name="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                    <CFormText className="help-block">
                      Please enter a complex password
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Confirm Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="password-input"
                      name="password-input"
                      placeholder="Confirm Password"
                    />
                    <CFormText className="help-block">
                      Please enter a password again
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Textarea</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="details"
                      id="textarea-input"
                      rows="9"
                      onChange={handleChange}
                      placeholder="Content..."
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={handleSubmit} type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Add_user;
