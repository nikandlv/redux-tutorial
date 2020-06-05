import { INCREASE_TYPE, DECREASE_TYPE, SET_TYPE } from "./types";

const initialState = {
  message: "Hello there",
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE_TYPE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_TYPE:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_TYPE:
      return {
        ...state,
        count: action.count,
      };

    default:
      return state;
  }
}
