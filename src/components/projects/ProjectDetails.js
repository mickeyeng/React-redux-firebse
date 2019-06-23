import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledCard } from '../../styles/StyledCard'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const { project, auth } = props
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <StyledContainer>
                <StyledCard projectSummary>
                    <h2> - {project.title}</h2>
                    <p>{project.content}</p>
                    <hr />
                    <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                    <p>date</p>
                </StyledCard>
            </StyledContainer>
        )
    } else {
        return (
            <StyledContainer>
                <p>Loading project....</p>
            </StyledContainer>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
    ])

)(ProjectDetails)
