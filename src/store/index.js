import { createContext, useReducer } from "react";
import userReducer from "./reducers/user.reducer";
import themeReducer from './reducers/theme.reducer';

const token = localStorage.getItem('token');
const userInitialState = {
    isAuth: (token) ? true : false,
    token: (token) ? token : null
}

const themeInitialState = {
    partials: '#3f51b5',
    color: 'whitesmoke',
    body: '#afadce',
    nav: 'aliceblue'
}

const appStore = createContext();

const AppStoreProvider = ({children}) => {
    const [user, userDispatch] = useReducer(userReducer, userInitialState);
    const [theme, themeDispatch] = useReducer(themeReducer, themeInitialState);

    const store = {
        user: {...user, dispatch: userDispatch},
        theme: {...theme, dispatch: themeDispatch}
    }

    return (
        <appStore.Provider value={store}>
            {children}
        </appStore.Provider>
    )
}

export { AppStoreProvider, appStore };