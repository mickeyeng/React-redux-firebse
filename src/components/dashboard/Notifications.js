import React from 'react'
import styled from 'styled-components'
import { StyledCard } from '../../styles/StyledCard'

const NotificationStyles = styled.div`
    grid-row: 1;
    grid-column: 2;
`



const Notifications = () => {
    return (
        <NotificationStyles>
            <StyledCard>
                <span>Notifications</span>
                <ul>
                    <li>Notifications</li>
                    <li>Notifications</li>
                    <li>Notifications</li>
                    <li>Notifications</li>
                </ul>
            </StyledCard>
        </NotificationStyles>
    )
}

export default Notifications 