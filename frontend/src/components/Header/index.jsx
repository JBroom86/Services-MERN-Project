function Header() {
    return (
        <>
        <div>
            <header className="p-4 flex justify-between">
                <a href="" className="flex items-center gap-1">
                    <img src="https://static.thenounproject.com/png/1335654-200.png" alt="" className="w-10 h-10"/>
                    <span><strong>Absolute Skin</strong> by Aireonna</span>
                </a>
                <div className="flex border border-brown-300 rounded-full p-2 shadow-md shadow-gray-300">
                    <div className="p-4">Services</div>
                    <div className="p-4">Products</div>
                    <div className="p-4">Log In</div>
                </div>
            </header>
        </div>
        
        </>
    )
}

export default Header