import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'
import { createProject } from '../../actions/projectAction'
import { connect } from 'react-redux'


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
        this.props.createProject(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)