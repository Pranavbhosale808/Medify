import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {useAuth} from "../store/auth"

export const Navbar =()=>{
    const {isLoggedIn} = useAuth();
return <>
<header>
    <div className="container">
        <div className="logo-brand">
            <a href="/">ItsLogo</a>
        </div>

       <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
    {isLoggedIn?(
            <li><NavLink to="/logout">Logout</NavLink></li>
            ):( <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            </>
            )}
        </ul>
       </nav>
    </div>
</header>
</>
}