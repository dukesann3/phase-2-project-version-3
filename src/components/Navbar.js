import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/About'>ABOUT</NavLink>
            <NavLink to='/Settings'>SETTINGS</NavLink>
            <NavLink to='/Posts'>POSTS</NavLink>
        </>
    )
}

export default Navbar;