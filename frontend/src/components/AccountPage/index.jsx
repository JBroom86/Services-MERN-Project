import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate } from "react-router-dom"

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
            <h1>Account Page for {user.name} </h1>
            <div>
                <nav className="w-full flex justify-center mt-8 gap-4">
                    <Link className="p-2 px-6" to={'/account/services'}>My Services</Link>
                    <Link className="p-2 px-6" to={'/account/products'}>My Products</Link>
                </nav>
            </div>
            
        </>
    )
}
    


export default AccountPage