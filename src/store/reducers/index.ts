import { combineReducers } from 'redux';

import authReducer from './loginReducer';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    feeds: feedReducer
});

export default rootReducer