import React from 'react'
import ProjectSummary from '../projects/ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        <>
            {projects && projects.map((project) => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )

            })}
        </>


    )
}

export default ProjectList