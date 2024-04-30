import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

// Пустой редьюсер, который просто возвращает предыдущее состояние
const rootReducer = (state = {}, action) => {
  return state;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
