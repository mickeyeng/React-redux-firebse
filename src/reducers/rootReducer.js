import authReducer from './projectReducer'
import projectReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer,
    projectReducer
})

export default rootReducer