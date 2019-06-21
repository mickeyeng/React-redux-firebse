import styled from 'styled-components'

export const StyledNav = styled.nav`
    background: ${props => props.dark ? '#757575' : 'green'}
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

export const StyledLogo = styled.li`

    list-style-type: none;
    

    a {
        color: white;
        font-size: 3rem;
        text-decoration: none;
    }
`;
