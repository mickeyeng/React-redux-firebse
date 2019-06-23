import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import styled from 'styled-components'
// import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const MainWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto 40%;
    grid-gap: 1rem;
    padding-bottom: 12%;
    padding-top: 7%;
`
class Dashboard extends React.Component {
    render() {
        const { projects } = this.props
        return (
            <StyledContainer top>
                <MainWrapper>
                    <ProjectList projects={projects} />

                </MainWrapper>
            </StyledContainer>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)