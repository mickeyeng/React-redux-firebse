import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/base'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'



const Nav = styled.nav`
    background: #757575;
    padding: 1rem;
    

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        order: 2;
        list-style-type: none;


        li {
            padding-left: 2rem;
        }
    }   

    a {
        padding-right: 20px;
        order: 1;
        text-decoration: none;
        color: white;
    } 

    li {
        &:hover {
            bacground-color: red;
        }
    }
   


`;

const Logo = styled.li`

    list-style-type: none;
    

    a {
        color: white;
        font-size: 3rem;
        text-decoration: none;
    }
`;





const Navbar = () => {
    return (
        <Nav>
            <Container>
                <SignedInLinks />
                <SignedOutLinks />
                <Logo><Link to='/'>MarioPlan</Link></Logo>
            </Container>
        </Nav>
    )
}

export default Navbar