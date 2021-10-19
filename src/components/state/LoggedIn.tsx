import { useState } from "react"
export const LoggedIn = () => {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const handleLogin = () => {
        setIsLogedIn(true)
    }
    const handleLogout = () => {
        setIsLogedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User is {isLogedIn ? 'loged in' : 'Log out'} </div>
        </div>
    )
}
