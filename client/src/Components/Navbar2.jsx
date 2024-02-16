import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar2 =()=>{
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
            <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
       </nav>
    </div>
</header>
</>
}