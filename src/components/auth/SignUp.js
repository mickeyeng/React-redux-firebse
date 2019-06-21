import React from 'react'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledAuthForm, Button } from '../../styles/StyledAuthForm'


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
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
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
                        <h2>Sign Up</h2>

                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="LastName">Last Name</label>
                            <input type="text" id="lasName" onChange={this.handleChange} />
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
                    </StyledAuthForm>
                </StyledContainer>
            </>
        )
    }
}

export default SignUp