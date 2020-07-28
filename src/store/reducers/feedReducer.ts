import * as actions from '../actions/actionTypes';

import { updateObject } from "../../utility/utility";
import { stat } from 'fs';

interface InitialFeedState {
    feeds: Array<any>;
    loading: boolean;
}

const initialState: InitialFeedState = {
    feeds: [],
    loading: false,
}

const fetchFeedsSuccess = (state: InitialFeedState, action: any) => {
    return {
        ...state,
        feeds: state.feeds.concat(action.feeds)
    }
};


const refreshFeeds = (state: InitialFeedState, action: any) =>  Object.assign({}, state, {
    feeds: [...state.feeds,  ...action.feeds]
  })

const fetchFeedsStart = (state: InitialFeedState, action: any) => {
    return updateObject(state, {
        loading: true
    });
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.FETCH_FEEDS_START:
            return fetchFeedsStart(state, action);
        case actions.FETCH_FEEDS_COMPLETED:
            return fetchFeedsSuccess(state, action);
        case actions.REFRESH_FEEDS:
            return refreshFeeds(state, action);
        default:
            return state;
    };
};

export default reducer;