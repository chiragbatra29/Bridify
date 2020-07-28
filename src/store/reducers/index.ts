import { combineReducers } from 'redux';

import authReducer from './auth';
import feedReducer from './feeds';

const rootReducer = combineReducers({
    auth: authReducer,
    feeds: feedReducer
});

export default rootReducer