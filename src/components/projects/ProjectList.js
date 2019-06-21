import React from 'react'
import styled from 'styled-components'


const Card = styled.div`

`

const CardContent = styled.div`

`

const ProjectList = () => {
    return (
        <Card>
            <CardContent>
                <h2>Project Title</h2>
                <p>Posted By Mickey</p>
                <p>3rd September 2019</p>
            </CardContent>
        </Card>
    )
}

export default ProjectList