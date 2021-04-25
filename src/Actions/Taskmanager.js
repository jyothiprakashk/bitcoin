import { PATH, APP_URL, ActionType } from "../Constants";
import axios from "axios";
export const CurrentPrice = () => async (dispatch, getState) => {
  try {
    const price = await axios.get(`${APP_URL}${PATH.CurrentPrice}`);
    if (price.status === 200) {
      console.log(price);
      dispatch({
        type: ActionType.CURRENT_PRICE,
        payload: price.data,
      });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error);
    }
  }
};
export const GraphData = () => async (dispatch, getState) => {
  let today = new Date().toISOString().slice(0, 10);
  var someDate = new Date(today);
  someDate.setDate(someDate.getDate() - 60); //number  of days to add, e.x. 15 days
  var sixtydaysback = someDate.toISOString().substr(0, 10);
  console.log(sixtydaysback);
  const { coinKey } = getState().reducer;
  try {
    const graphdata = await axios.get(
      `${APP_URL}${
        PATH.Graph
      }${coinKey}${`&start=${sixtydaysback}&end=${today}`}`
    );
    if (graphdata.status === 200) {
      console.log(graphdata);
      dispatch({
        type: ActionType.GRAPH_DATA,
        payload: graphdata.data.bpi,
      });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error);
    }
  }
};
