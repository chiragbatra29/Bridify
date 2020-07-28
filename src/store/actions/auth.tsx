import * as actionTypes from './actionTypes';

export const authSuccess = (isLoggedIn: boolean) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isLoggedIn: isLoggedIn,
    };
};

export const authFail = (error: string) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
        isLoggedIn: false
    };
};

export const login = (error: any, isLoggedIn: boolean) => {
    return (dispatch: any) => {
        if(error) {
            dispatch(authFail(error));
        } else {
            dispatch(authSuccess(isLoggedIn));
        }
    };
};
