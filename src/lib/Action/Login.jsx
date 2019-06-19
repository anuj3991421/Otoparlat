export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginUser = (email, password) =>{
    return (dispatch, getState) => {
        dispatch({ type: LOGIN_SUCCESS });
    }
}