import {createStore} from 'redux'

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    return state
}

const store = createStore(reducer)

export default store