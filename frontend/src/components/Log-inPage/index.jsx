import { useState } from "react"
import { Link } from "react-router-dom"


function LogInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

// Login confirmation alerts -> https://blog.appsignal.com/2022/06/15/how-to-handle-errors-in-react.html
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post('/login', {email, password})
            alert('Login Successful')        
        } catch (e) {
            alert('Login failed')
        }
    }

    return (
        <>
            <div className="flex min-h-screen p-4 mt-4 grow items-center justify-around">
                <div className="-mt-64">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                        <input type="email" 
                            placeholder="email address" 
                            value={email} 
                            onChange={ev => setEmail(ev.target.value)}
                            />
                        <input type="password" 
                            placeholder="password" 
                            value={password} 
                            onChange={ev => setPassword(ev.target.value)}
                        />
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