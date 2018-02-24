
function userData(state = [], action) {
    switch (action.type) {
        case 'FETCHING_USER_DATA': {
            let newState = Object.assign({}, state, {
                isFetchingUserData: true,
                phoneNumbers: [],
                deposits: [],
                name: ''
            })
            
            return newState
        }
        case 'FETCHING_USER_DATA_COMPLETE': {
            let newState = Object.assign({}, state, {
                isFetchingUserData: false,
                phoneNumbers: action.userData.phoneNumbers,
                deposits: action.userData.deposits,
                name: action.userData.name
            })
            
            return newState
        }
        case 'SET_STATE_USER_DATA': {
            let newState = Object.assign({}, state, action.rState)
            
            return newState
        }
        
        default: {
            return state
        }
    }

}


export default userData