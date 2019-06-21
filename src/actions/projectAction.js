export const createProject = (project) => {
    return (dispatch, getState) => {
        // make asynk call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}