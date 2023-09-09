// reducers.js
import { combineReducers } from 'redux';

const initialState = {
  count: 0,
  myCount: 2.0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const myCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOUBLE':
      return { ...state, myCount: state.myCount * 2 };
    case 'SINGLE':
      return { ...state, myCount: state.myCount / 2 };
    default:
      return state;
  }
};

// Combine the reducers into a single rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  myCounter: myCounterReducer,
});

export default rootReducer;
