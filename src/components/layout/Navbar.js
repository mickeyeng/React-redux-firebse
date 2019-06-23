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
    const { auth } = props;
    return (
        <StyledNav dark>
            <StyledContainer>
                {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
                <StyledLogo><Link to='/'>MarioPlan</Link></StyledLogo>
            </StyledContainer>
        </StyledNav>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)