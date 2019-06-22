import React from 'react'
import ProjectSummary from '../projects/ProjectSummary'

const ProjectList = ({ projects }) => {
    return (
        <>
            {projects && projects.map((project) => {
                return (

                    <ProjectSummary key={project.id} project={project} />

                )

            })}
        </>


    )
}

export default ProjectList