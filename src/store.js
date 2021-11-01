import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister:userRegisterReducer
})

const userInfoFromStorage = localStorage.getItem('userInfoFamous')
  ? JSON.parse(localStorage.getItem('userInfoFamous'))
  : null

const initialState = {
  userLogin: { userInfoFamous: userInfoFromStorage },
}

const middleWare = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
