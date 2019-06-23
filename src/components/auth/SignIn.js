import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'


class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
        this.props.history.push('/')
    }

    render() {
        const { authError } = this.props
        return (
            <React.Fragment>
                <StyledContainer setMarginTop>
                    <StyledAuthForm onSubmit={this.handleSubmit}>
                        <h2>Sign In</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>

                        <Button>Login</Button>
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
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => {
            dispatch(signIn(credentials))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)