const userReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                token: payload
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                token: null
            }
        default:
            throw new Error('user store action not found');
    }
}

export default userReducer;