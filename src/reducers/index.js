import { combineReducers } from 'redux'
// import { reducer as formReducer} from 'redux-form'
import footballReducer from './footballReducer'
import idReducer from './idReducer'

export default combineReducers({
    teams: footballReducer,
    leagueId: idReducer 
    // form: formReducer
})