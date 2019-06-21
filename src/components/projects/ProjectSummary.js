import React from 'react'
import { StyledCard } from '../../styles/StyledCard'


const ProjectSummary = ({ project }) => {
    return (
        <StyledCard>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
            <p>3rd September 2019</p>
        </StyledCard>
    )
}


export default ProjectSummary