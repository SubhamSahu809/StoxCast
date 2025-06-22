const {model} = require("mongoose");
const WatchlistSchema = require("../Schemas/WatchlistSchema");

const WatchlistModel = new model("watchlist", WatchlistSchema);

module.exports = WatchlistModel;