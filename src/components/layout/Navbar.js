import React from 'react'
import { StyledNav, StyledLogo } from '../../styles/StyledNav'
import { StyledContainer } from '../../styles/StyledContainer'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
// import { firebaseConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    return (
        <StyledNav dark>
            <StyledContainer>
                {auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />}
                <StyledLogo><Link to='/'>MarioPlan</Link></StyledLogo>
            </StyledContainer>
        </StyledNav>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)