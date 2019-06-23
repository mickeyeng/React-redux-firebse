import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../actions/authActions'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {
    console.log(props)

    // const handleSignOut = () => {
    //     console.log('clicked')
    //     props.dispatch(signOut())
    // }

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