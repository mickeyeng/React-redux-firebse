import styled from 'styled-components'

export const StyledContainer = styled.div`
    padding: 0;
    max-width: 960px;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;  


    margin-top: ${props => {
        return (
            props.form ? '4rem' : '0'
        )
    }}
`;