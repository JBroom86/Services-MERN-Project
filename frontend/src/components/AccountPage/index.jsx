import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Navigate } from "react-router-dom"

function AccountPage() {
    const {ready, user} = useContext(UserContext)

    if (!ready) {
        return 'Loading account details...'
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <>
            <h1>Account Page for {user?.name} </h1>
        </>
    )
}
    


export default AccountPage