import { ActionType } from "../Constants";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CURRENT_PRICE:
      return { ...state, CurrentPrice: action.payload };
    case ActionType.COIN_KEY:
      return { ...state, coinKey: action.payload };
    case ActionType.GRAPH_DATA:
      return { ...state, graphs: action.payload };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
