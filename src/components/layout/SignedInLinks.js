import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../actions/authActions'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {
    return (
        <ul>
            <NavLink to="/create">New Project</NavLink>
            <NavLink onClick={props.signOut} to="/">Logout</NavLink>
            <NavLink to="/">ME</NavLink>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }

}

export default connect(null, mapDispatchToProps)(SignedInLinks)