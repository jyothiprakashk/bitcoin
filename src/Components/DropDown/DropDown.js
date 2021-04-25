import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./DropDown.css";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../Constants";
import { GraphData } from "../../Actions/Taskmanager";

const DropDown = ({
  open,
  handleClose,
  handleOpen,
  languageChange,
  bitData,
  coinKey,
}) => {
  const dispatch = useDispatch();
  const { CurrentPrice } = useSelector(({ reducer }) => reducer);
  console.log(coinKey);
  useEffect(() => {
    dispatch({
      type: ActionType.COIN_KEY,
      payload: coinKey,
    });
    dispatch(GraphData());
  }, []);
  return (
    <div className="mt-3">
      <label className="label">1 BitCoin Equals</label>
      <FormControl
        variant="outlined"
        className="underline mb-3"
        id="standard-name"
      >
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={bitData}
          onChange={languageChange}
        >
          <MenuItem value={"United States Dollar"}>
            United States Dollar
          </MenuItem>
          <MenuItem value={"British Pound Sterling"}>
            British Pound Sterling
          </MenuItem>
          <MenuItem value={"Euro"}>Euro</MenuItem>
        </Select>
      </FormControl>
      <div className="display">
        {CurrentPrice && CurrentPrice && CurrentPrice.bpi ? (
          <>
            <div>{CurrentPrice.bpi[coinKey].rate_float}</div>
            <div>{CurrentPrice.bpi[coinKey].description}</div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DropDown;
