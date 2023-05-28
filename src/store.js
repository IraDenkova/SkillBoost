import { createStore } from 'redux';

const initialState = {
  active: localStorage.getItem('active') || 'home',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      localStorage.setItem('active', action.payload);
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;