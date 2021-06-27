import {LOGIN, LOGOUT} from './constants';

const appStoreReducer = (state, action) => {

    const {type, payload} = action;
    console.log(action)

    switch (type) {
        case LOGIN:
                return {
                    ...state,
                    isAuth: true,
                    token: payload
                }
            break;
        case LOGOUT:
                return {
                    ...state,
                    isAuth: false,
                    token: ""
                }
            break;
    
        default:
            throw new Error('store action not found');
    }
}

export default appStoreReducer;