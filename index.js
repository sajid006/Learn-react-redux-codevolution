const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action',
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// (previousState, action) => newstate

/*
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}
*/

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

/*
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfCakes - 1
        }
        default: return state
    }
}
*/

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


//const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
