import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul>
            <NavLink to="/">New Project</NavLink>
            <NavLink to="/">Logout</NavLink>
            <NavLink to="/">ME</NavLink>
        </ul>
    )
}



export default SignedInLinks