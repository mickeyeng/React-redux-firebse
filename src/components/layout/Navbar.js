import React from 'react'
import { StyledNav, StyledLogo } from '../../styles/StyledNav'
import { StyledContainer } from '../../styles/StyledContainer'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <StyledNav dark>
            <StyledContainer>
                <SignedInLinks />
                <SignedOutLinks />
                <StyledLogo><Link to='/'>MarioPlan</Link></StyledLogo>
            </StyledContainer>
        </StyledNav>
    )
}

export default Navbar