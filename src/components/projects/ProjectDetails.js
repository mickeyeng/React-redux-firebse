import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledCard } from '../../styles/StyledCard'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <StyledContainer>
            <StyledCard summary>
                <h2>Project Summary - {props.match.params.id}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam esse accusantium placeat dicta repellat. Placeat ex optio facere neque iusto esse soluta voluptatem doloribus ea eaque. Dolore, velit minima?</p>
                <hr />
                <p>Posted By Mickey</p>
                <p>21 June 2019, 1pm</p>
            </StyledCard>
        </StyledContainer>
    )
}

export default ProjectDetails
