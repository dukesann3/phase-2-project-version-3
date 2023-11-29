import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function Navbar() {
    return (
        <>
            <Menu>
                <Menu.Item><NavLink to='/'>HOME</NavLink></Menu.Item>
                <Menu.Item><NavLink to='/About'>ABOUT</NavLink></Menu.Item>
                <Menu.Item><NavLink to='/Settings'>SETTINGS</NavLink></Menu.Item>
                <Menu.Item><NavLink to='/Posts'>POSTS</NavLink></Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar;