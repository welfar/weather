import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const rootReducer = combineReducers({
  reducer,
})

const middlewares = applyMiddleware(thunk)
export const store = createStore(rootReducer, middlewares)

export default store