import { Link } from "react-router-dom"


function LogInPage() {
    return (
        <>
            <div className="flex min-h-screen p-4 mt-4 grow items-center justify-around">
                <div className="-mt-64">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-md mx-auto">
                        <input type="email" placeholder="email address" />
                        <input type="password" placeholder="password" />
                        <button className="loginbutton">Login</button>
                        <div className="text-center py-2">
                            <Link to={'/signup'} className="underline">Create an account</Link>                        
                        </div>
                        
                    </form>
                </div>   

            </div>
        </>
    
    

    )
}

export default LogInPage