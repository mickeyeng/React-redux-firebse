import styled from 'styled-components'

export const StyledCard = styled.div`

    background: white;
    grid-column: 1 / 1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 1rem;

    div:last-child {
        padding-bottom: 5rem;
    }
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    width: ${props => props.projectSummary && '100%'}
    margin-top: ${props => props.projectSummary && '3rem'}

    h2 { 
        font-weight: 500;
     }

    p {

    }
`

