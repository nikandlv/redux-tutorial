import { INCREASE_TYPE, DECREASE_TYPE, SET_TYPE } from "./types";

export const IncreaseCount = {
  type: INCREASE_TYPE,
};
export const DecreaseCount = {
  type: DECREASE_TYPE,
};
export function SetCount(count) {
  return {
    type: SET_TYPE,
    count,
  };
}
