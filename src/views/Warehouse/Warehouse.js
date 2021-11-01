import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import XLSX from 'xlsx';
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
import WarehouseTable from "./WirehouseTable";
import { insertWirehouse, getAllWirehouse, insertBuy, getAllBuy} from "src/api/apiWirehouse";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


export default function Warehouse() {
  const page_name = "Warehouse";
  var data1;
  const [show, setShow] = useState(false);
  const [wirehouse, setWirehouse] = useState([]);
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
    insertBuy (values)
      .then(response => {
        if(response.status === 200){
          setRedirect(true)
        }
        
      })
      .catch(err => alert("Something Went Wrong"));
  }

  useEffect(()=>{
    getAllBuy()
    .then(response => setWirehouse(response.data))
    .catch(err => alert("Something went wrong!"))
  },[]);

  const handleExcel = () => {
    const newData=wirehouse.map(row=>{
        delete row.tableData
        return row
      })
      const workSheet=XLSX.utils.json_to_sheet(newData)
      const workBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workBook,workSheet,"buy")
      //Buffer
      let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
      //Binary string
      XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
      //Download
      XLSX.writeFile(workBook,"Data.xlsx")

  }

  return (
    <div>
       {redirect ? window.location.replace("/buy") : ""}
       
       <Button className="mb-3" variant="primary" onClick={handleExcel}>
       Download Excel
      </Button>
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
                        <CLabel htmlFor="selectLg">Status</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" size="lg">
                        <CSelect onChange={handleChange} custom size="lg" name="status" id="selectLg">
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
                      <th scope="col" width="15%">Currency</th>
                      <th scope="col" width="15%">Total Amount</th>
                      <th scope="col" width="15%">Number of impact token</th>
                      <th scope="col" width="15%">BSC wallet address</th>
                      <th scope="col" width="15%">Transaction hash number</th>
                      <th scope="col" width="15%">Telegram handle</th>
                      <th scope="col" width="15%">Create at</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wirehouse.map((item, i) => <WarehouseTable
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
