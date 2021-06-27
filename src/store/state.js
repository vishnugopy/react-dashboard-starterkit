const initialState = {
    isAuth: false,
    token: (localStorage.getItem('token')) ? localStorage.getItem('token') : ""
}

export default initialState;