import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";



const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/allWatchlist")
      .then((res) => setWatchlist(res.data))
      .catch((err) => console.error("Error fetching watchlist:", err));
  }, []);

  const filteredList = watchlist.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts">{filteredList.length} / 50</span>
      </div>

      <ul className="list">
        {filteredList.map((stock, index) => (
          <WatchListItem key={index} stock={stock} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

// ---------------- WatchListItem ----------------

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">₹{stock.price}</span>
        </div>
      </div>
      {showActions && <WatchListAction uid={stock.name} />}
    </li>
  );
};

// ---------------- WatchListAction ----------------

const WatchListAction = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuy = () => {
    openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuy}>
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

