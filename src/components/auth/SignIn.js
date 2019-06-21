import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'


class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <StyledContainer>
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
                    </StyledAuthForm>
                </StyledContainer>
            </>
        )
    }
}

export default SignIn