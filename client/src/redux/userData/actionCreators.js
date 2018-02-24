let axios = require('axios')

function isFetchingUserData() {
    
    return { type: 'FETCHING_USER_DATA' }
}

function fetchingUserDataComplete(userData) {
    
    return { type: 'FETCHING_USER_DATA_COMPLETE', userData: userData.data }
}

function setReduxStateUserData(rState) {
    
    return { type: 'SET_STATE_USER_DATA', rState: rState }
}

// thunks

function getUserData(selectedUser) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(isFetchingUserData())


        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.



        axios.get('/api/userdata', {
            params: {
                UserID: selectedUser[0].UserID
            }
        })
        .then(function (response) {
            console.log('got response')
            console.log(response)
            response.data.name = selectedUser[0].Name
            console.log(selectedUser[0].Name)
            dispatch(fetchingUserDataComplete(response))

        })
        .catch(function (error) {
            console.log(error);
        });

    }
}


module.exports = {
    setReduxStateUserData,
    getUserData
}