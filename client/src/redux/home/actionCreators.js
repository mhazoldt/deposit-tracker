let axios = require('axios')

function isFetchingUserData() {
    
    return { type: 'FETCHING_USER_DATA_HOME' }
}

function fetchingUserDataComplete(userData) {
    
    return { type: 'FETCHING_USER_DATA_COMPLETE_HOME', userData: userData }
}


function setPhoneNumberSearch(phoneNumberSearch) {
    
    return { type: 'SET_PHONE_NUMBER_SEARCH', phoneNumberSearch: phoneNumberSearch }
}

function setNameSearch(nameSearch) {
    
    return { type: 'SET_NAME_SEARCH', nameSearch: nameSearch }
}

function resetSearch() {
    
    return { type: 'RESET_SEARCH' }
}


function setReduxStateBaselayout(rState) {
    
    return { type: 'SET_STATE_HOME', rState: rState }
}

// thunks

function search(phoneNumber, nameResults) {
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



        axios.get('/api/search', {
            params: {
                phoneNumber: phoneNumber
            }
        })
        .then(function (response) {
            console.log('got response phoneNumber')
            console.log(response)

            // add unique name results to phone number results
            nameResults.forEach((nameResult) => {
                if(!(response.data.UserID.includes(nameResult))) {
                    response.data.UserID.push(nameResult)
                }

            })

            let searchResults = response.data.UserID

            // if(response.data.UserID) {
            //     searchResults = 
            // } else {
            //     searchResults = nameResults
            // }

            dispatch(fetchingUserDataComplete(searchResults))
            
        })
        .catch(function (error) {

            dispatch(fetchingUserDataComplete(nameResults))

            console.log(error);

        });

    }
}


module.exports = {
    setReduxStateBaselayout,
    setPhoneNumberSearch,
    setNameSearch,
    search,
    resetSearch
}