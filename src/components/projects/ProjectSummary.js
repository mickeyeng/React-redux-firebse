import React from 'react'
import { StyledCard } from '../../styles/StyledCard'
import { Link } from 'react-router-dom'
import moment from 'moment'



const ProjectSummary = ({ project }) => {

    return (
        <StyledCard>
            <Link to={`project/${project.id}`}>
                <h2>{project.title}</h2>
            </Link>
            <p>{project.content}</p>
            <p>{project.authorFirstName} {project.authorLastName}</p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
        </StyledCard>
    )
}

export default ProjectSummary