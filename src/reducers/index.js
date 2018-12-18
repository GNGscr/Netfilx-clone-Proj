import { combineReducers } from 'redux'
import browseReducer from '../components/Browse/Browse.reducer';

const rootReducer = combineReducers({
    SearchPage : SearchPageReducer
})

export default rootReducer