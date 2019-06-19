import {LOGIN_SUCCESS } from '../Action/Login';

const initialState = {
    isLoading: false,
    logged_in: true,
    user: '',
    username: {},
    password: {},
    required_data:{},
    isempty_field: false,
}

export const migrations = {
    1: previousVersionState => ({
        number: {
            change: previousVersionState.number,
            lastUpdate: new Date()
        }
    })
};

const User = (state = initialState, action) =>{
    if(state === null || state === undefined || action === null){
        return { ...state }
    }

    switch(action.type){
        case LOGIN_SUCCESS : 
            return {
                ...state,
                logged_in: true,
                user: 'xyz',

            };
        default:
            return state;
    }

}

export default User;