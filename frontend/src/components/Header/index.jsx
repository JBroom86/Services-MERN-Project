import { Route, Routes, Link } from 'react-router-dom'

import axios from 'axios'



function Header() {
    return (
        <>
        <div>
            <header className="p-4 flex justify-between">
                <Link to="/" className="flex items-center gap-1">
                    <img src="https://static.thenounproject.com/png/1335654-200.png" alt="" className="w-20 h-20"/>
                    <span><strong>Absolute Skin</strong> by Aireonna</span>
                </Link>
                <div className="flex items-center border border-brown-300 rounded-full p-2 shadow-md shadow-gray-300">
                    <div className="p-4"><Link to="/services">Services</Link></div>
                    <div className="p-4"><Link to="/products">Products</Link></div>
                    <div className="p-4"><Link to="/about">About Me</Link></div>
                    <div className="p-4"><Link to="/login">Log In</Link></div>
                </div>
            </header>
        </div>
        
        
        </>
    )
}

export default Header