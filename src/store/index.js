import { createContext, useReducer } from "react";
import appStoreReducer from "./reducer";
import initialState from "./state";

const appStore = createContext(initialState);

const AppStoreProvider = ({children}) => {
    const [store, dispatch] = useReducer(appStoreReducer, initialState);

    return (
        <appStore.Provider value={{store, dispatch}}>
            {children}
        </appStore.Provider>
    )
}

export { AppStoreProvider, appStore };