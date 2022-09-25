// create store 
const redux = require('redux');
const createStore = redux.createStore
//Type of action
const CAKE_ORDERED = 'CAKE_ORDERED'


function orderCake() {

    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

// this is the initial state of the store
const inititailState = {
    numOfCake: 10,
    staffs: 1
}


// REDUCER
const reducer = (state = inititailState, action) => {

    switch (action.type) {
        case CAKE_ORDERED:
            return {
                // the spreeed operator was used to create another state before the action was sent to the reducer 
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default: return state

    }
}

// redux store holding the state of the application 
const store = createStore(reducer)

// getState tell me the current state of the store 
console.log("initial state", store.getState());

// i dont really know what this subscribe does 
const unsubscibe= store.subcribe(()=> console.log("update State ", store.getState()))

// Dispatch
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscibe()