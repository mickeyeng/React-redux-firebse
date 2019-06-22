import React from 'react'
import { StyledCard } from '../../styles/StyledCard'
import { Link } from 'react-router-dom'



const ProjectSummary = ({ project }) => {
    return (
        <StyledCard>
            <Link to={`project/${project.id}`}>
                <h2>{project.title}</h2>
            </Link>
            <p>{project.content}</p>
            <p>3rd September 2019</p>
        </StyledCard>
    )
}


export default ProjectSummary