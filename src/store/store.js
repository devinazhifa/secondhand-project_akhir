import { combineReducers, createStore } from "redux";
import productReducer from './product/reducer'

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    product: productReducer,
})

const store = createStore(reducers)

export default store