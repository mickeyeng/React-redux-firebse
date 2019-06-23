import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'
import { createProject } from '../../actions/projectAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


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
        this.props.createProject(this.state)
        this.props.history.push('/')
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <React.Fragment>
                <StyledContainer setMarginTop>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)