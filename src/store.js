import React, { createContext } from "react";


const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('token');        

        this.state={
            isAuth: token ? true : false ,
            setAuth: this.setAuth   
        }
    }

    setUser = (user) => {
        this.setState({user});
    }
    
    setAuth = (boolean) => {
        this.setState({isAuth: boolean});
    } 
    
    componentDidMount () {
        // const token = localStorage.getItem('token');    
        // const secret = process.env.REACT_APP_SECRET;

    }
    
    render () {
        return (
            <appContext.Provider value={this.state}>
                {this.props.children}
            </appContext.Provider>
        )
    }
}


export {AppProvider , AppContext};
