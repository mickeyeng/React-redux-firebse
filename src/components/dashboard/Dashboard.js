import React from 'react'
import { Container } from '../../styles/base'
import styled from 'styled-components'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

const MainWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 80% 20%;
    grid-gap: 2rem;
`






class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <MainWrapper>


                    <ProjectList />



                    <Notifications />



                </MainWrapper>
            </Container>
        )
    }


}

export default Dashboard