import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import styled from 'styled-components'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

const MainWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto 40%;
    grid-gap: 1rem;
`
class Dashboard extends React.Component {
    render() {
        return (
            <StyledContainer>
                <MainWrapper>


                    <ProjectList />



                    <Notifications />



                </MainWrapper>
            </StyledContainer>
        )
    }


}

export default Dashboard