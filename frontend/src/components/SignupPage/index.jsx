import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function SignupPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function signUp(ev) {
        ev.preventDefault();
        axios.get('http://localhost:5000/test')
    }


    return (
        <>
            <div className="flex min-h-screen p-4 mt-4 grow items-center justify-around">
                <div className="-mt-64">
                    <h1 className="text-4xl text-center mb-4">Sign Up</h1>
                    <form className="max-w-md mx-auto" onSubmit={signUp}>
                        <input type="text" 
                            placeholder="name" 
                            value={name} 
                            onChange={ev => setName(ev.target.value)}
                            />
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
                        <button className="loginbutton">Sign Up!</button>
                        <div className="text-center py-2">
                            <Link to={'/login'} className="underline">Already have an account?</Link>                        
                        </div>
                        
                    </form>
                </div>   

            </div>
        </>
    
    

    )
}

export default SignupPage