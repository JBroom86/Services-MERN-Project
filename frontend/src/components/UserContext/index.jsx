// UserContext allows you to pass props between compontents easily without having to define them on every component - Documentation: https://www.w3schools.com/react/react_usecontext.asp - Tutorial:  https://www.digitalocean.com/community/tutorials/react-manage-user-login-react-context

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export function UserContextProvder({children}) {
    const [user, setUser] = useState()
    useEffect( () => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
            
        }
        
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
           
    )
}


