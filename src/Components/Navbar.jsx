import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <h3 className='logo'>TODO APP <i class="fa-solid fa-list"></i></h3>
            <ul className='NavMenu'>
                <li >
                    <CustomLink to='/home' className='NavLinks'>HOME</CustomLink>
                </li>
                <li>
                    <CustomLink to='/today' className='NavLinks'>TODAY</CustomLink>
                </li>
            </ul>

        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar