import React, { useState, useEffect } from "react";
import DropDown from "../../Components/DropDown/DropDown";
import { CurrentPrice } from "../../Actions/Taskmanager";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../../Components/Graphs/Graph";
import "./MainPage.css";
const MainPage = () => {
  const dispatch = useDispatch();

  const [bitData, setBitData] = useState("United States Dollar");
  const [open, setOpen] = useState(false);
  const [coinKey, setCoinKey] = useState("USD");
  const handleClose = () => {
    setOpen(false);
  };

  const languageChange = (event) => {
    console.log(event.target.value);
    setBitData(event.target.value);
    if (event.target.value === "United States Dollar") {
      setCoinKey("USD");
    } else if (event.target.value === "British Pound Sterling") {
      setCoinKey("GBP");
    } else if (event.target.value === "Euro") {
      setCoinKey("EUR");
    }
    dispatch(CurrentPrice(coinKey));
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="container-data">
      <DropDown
        languageChange={languageChange}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        bitData={bitData}
        coinKey={coinKey}
      />
      <Graph />
    </div>
  );
};

export default MainPage;
