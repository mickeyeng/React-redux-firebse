import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createUser } from '../../actions/authActions.js'

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.createUser(this.state)
    }

    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to="/" />
        return (
            <React.Fragment>
                <StyledContainer setMarginTop>
                    <StyledAuthForm onSubmit={this.handleSubmit}>
                        <h2>Sign Up</h2>

                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="LastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>



                        <Button>Sign Up</Button>
                        <div>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </StyledAuthForm>
                </StyledContainer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.authError)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (newUser) => dispatch(createUser(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)