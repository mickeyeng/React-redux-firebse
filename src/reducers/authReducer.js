
const defaultState = {
    authError: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null,
                project: action.credentials
            }
        case 'SIGN_IN_FAILED':
            // console.log('Login failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('Sign out success')
            return {
                ...state
            }
        case 'SIGN_OUT_ERROR':
            console.log('Sign out error')
            return {

            }
        default:
            return state
    }

}



export default authReducer



