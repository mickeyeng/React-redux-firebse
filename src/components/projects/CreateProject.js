import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'


class CreateProject extends React.Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <StyledContainer form>
                    <StyledAuthForm onSubmit={this.handleSubmit}>
                        <h2>Create Project</h2>

                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="content">Project Content</label>
                            <textarea id="content" onChange={this.handleChange} />
                        </div>
                        <Button>Create</Button>
                    </StyledAuthForm>
                </StyledContainer>
            </>
        )
    }
}

export default CreateProject