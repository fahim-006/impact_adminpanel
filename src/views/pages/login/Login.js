import React, { useState, useEffect } from 'react'
import AuthService from '../../../containers/Authentication service/AuthService'
//import { Link, useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../actions/userActions'

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfoFamous } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  /* const onChangeUsername = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
*/
  // History Funtion Srart

  console.log(email)
  console.log(password)

  useEffect(() => {
    if (userInfoFamous) {
      history.push(redirect)
    }
  }, [history, userInfoFamous, redirect])

  const submit = (e) => {
    e.preventDefault()
    //dispatch(login((email, password)))
    if(email === 'charity@impact.finance' && password === '123456'){
      localStorage.setItem('emailofadmin',email);
      window.location.replace("/admindashboard");
     
  }else{
      alert("Wrong Email, please contact with developers")
  }
  }

  // const submit = (e) => {
  //   e.preventDefault();

  //   setMessage("");

  //   // form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     AuthService.login(username, password).then(
  //       () => {
  //         props.history.push("/");
  //         window.location.reload();
  //       },
  //       (error) => {
  //         const resMessage =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString();

  //         setLoading(false);
  //         setMessage(resMessage);
  //       }
  //     );
  //   } else {
  //     setLoading(false);
  //   }
  // };

  // History Function End
  return (
    <div className='c-app c-default-layout flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md='8'>
            <CCardGroup>
              <CCard className='p-4'>
                <CCardBody>
                  <CForm onSubmit={submit}>
                    <h1>Login</h1>
                    <p className='text-muted'>Sign In to your account</p>
                    <CInputGroup className='mb-3'>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name='cil-user' />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type='email'
                        placeholder='email'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className='mb-4'>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name='cil-lock-locked' />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs='6'>
                        <CButton type='submit' color='primary' className='px-4'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs='6' className='text-right'>
                        <CButton color='link' className='px-0'>
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className='text-white bg-primary py-5 d-md-down-none'
                style={{ width: '44%' }}
              >
                <CCardBody className='text-center'>
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
