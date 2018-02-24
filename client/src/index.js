import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './redux/reducers'
import './styles/index.css';

let loggerMiddleware = createLogger()

let initialState = {
    home: {
        users: [
            {
                "UserID": "c885cd5f-414f-4274-b787-3d7de6ffd665",
                "Name": "Rick"
            },
            {
                "UserID": "3db43d91-8123-46a6-a8fc-e52afbbf9ca3",
                "Name": "Triston"
            },
            {
                "UserID": "db01b66d-2026-46fa-9182-4b1618746533",
                "Name": "Kandarp"
            }
        ],
        phoneNumberSearch: '',
        nameSearch: '',
        isFetching: false,
        searchResults: ''
    },
    userData: {
        phoneNumbers: [],
        deposits: [],
        name: '',
        isFetchingUserData: false
    }
}


const store = createStore(reducer,
    initialState,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();