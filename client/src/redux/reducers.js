import { combineReducers } from 'redux'

import userData from './userData/reducers'
import home from './home/reducers'


let reducers = combineReducers({
    userData,
    home
})

export default reducers