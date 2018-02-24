function home(state = [], action) {
    switch (action.type) {
        case 'RESET_SEARCH': {
            let newState = Object.assign({}, state, {
                isFetching: false,
                phoneNumberSearch: '',
                nameSearch: '',
                searchResults: ''
                
            })
            
            return newState
        }
        case 'SET_NAME_SEARCH': {
            let newState = Object.assign({}, state, {
                nameSearch: action.nameSearch
                
            })
            
            return newState
        }
        case 'SET_PHONE_NUMBER_SEARCH': {
            let newState = Object.assign({}, state, {
                phoneNumberSearch: action.phoneNumberSearch
                
            })
            
            return newState
        }
        case 'FETCHING_USER_DATA_HOME': {
            let newState = Object.assign({}, state, {
                isFetching: true

            })
            
            return newState
        }
        case 'FETCHING_USER_DATA_COMPLETE_HOME': {
            
            let newState = Object.assign({}, state, {
                isFetching: false,
                searchResults: action.userData
            })
            
            return newState
        }
        case 'SET_STATE_HOME': {
            let newState = Object.assign({}, state, action.rState)
            
            return newState
        }
        
        default: {
            return state
        }
    }

}


export default home