import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul>
            <NavLink to="/">Sign Up</NavLink>
            <NavLink to="/">Login</NavLink>
        </ul>
    )
}



export default SignedOutLinks