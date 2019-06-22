export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynk call to database
        // Fire Store
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'mickey',
            authorLastName: 'english',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })

        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}