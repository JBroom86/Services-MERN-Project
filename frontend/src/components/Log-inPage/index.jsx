function LogInPage() {
    return (
        <>
            <div className="flex min-h-screen p-4 mt-4 grow items-center justify-around">
                <div className="-mt-64">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-md mx-auto">
                        <input type="email" placeholder="email address" />
                        <input type="password" placeholder="password" />
                        <button className="primary">Login</button>
                    </form>
                </div>   

            </div>
        </>
    
    

    )
}

export default LogInPage