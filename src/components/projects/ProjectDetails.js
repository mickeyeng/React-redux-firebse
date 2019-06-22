import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledCard } from '../../styles/StyledCard'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

const ProjectDetails = (props) => {
    const { project } = props
    console.log(props)
    if (project) {
        return (
            <StyledContainer>
                <StyledCard summary>
                    <h2> - {project.title}</h2>
                    <p>{project.content}</p>
                    <hr />
                    <p>Posted By {project.authorFirstName} {project.authorFirstName}</p>
                    <p>{project.authorCreatedAt}</p>
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
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
    ])

)(ProjectDetails)
