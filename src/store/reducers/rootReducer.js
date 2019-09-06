import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  events: [],
  loading: false,
  success: false,
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.GET_EVENTS:
    return {
      ...state,
      events: action.payload,
      loading: false,
      success: true,
    };
  case actionTypes.LOADING:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};
