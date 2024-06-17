import {combineReducers} from 'redux' 
import noteReducer from './noteReducer';
import loaitinReducer from './loaitinReducer';

export default combineReducers({
    note: noteReducer,       
    loaitin: loaitinReducer,    
})

