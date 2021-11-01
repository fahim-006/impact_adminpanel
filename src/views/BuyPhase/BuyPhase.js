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
import BuyPhaseTable from "./BuyPhaseTable";
import { getAllbuyphase, insertBuyPhase } from "src/api/apiBuyPhase";

export default function BuyPhase() {
  const page_name = "Buyphase";
  const [show, setShow] = useState(false);
  const [buyPhase, setBuyphase] = useState([]);
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
    insertBuyPhase (values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllbuyphase()
    .then(response => setBuyphase(response.data))
    .catch(err => alert("Something went wrong!"))
  },[])

  return (
    <div>
       {redirect ? window.location.replace("/buyphase") : ""}
      {/* Modal Start */}
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

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectLg">Phase No</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                        <CSelect onChange={handleChange} custom size="lg" name="phaseno" id="selectLg">
                          <option value="">Phaseno</option>
                          <option value="Active">1</option>
                          <option value="Inactive">2</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">{`${page_name} Name`}</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="phaseno"
                          name="phaseno"
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
      <div className="container my-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                      <th scope="col" width="15%">Phase No</th>
                      <th scope="col" width="15%">Token Amount</th>
                      <th scope="col" width="15%">Price</th>
                      <th scope="col" width="15%">tax</th>
                      <th scope="col" width="15%">Min Buy</th>
                      <th scope="col" width="15%">Max buy</th>
                      <th scope="col" width="15%">Time</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {buyPhase.map((item, i) => <BuyPhaseTable
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
