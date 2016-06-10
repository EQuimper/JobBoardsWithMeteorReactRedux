import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    routing: routerReducer,
    toastr: toastrReducer
});

export default rootReducer;
