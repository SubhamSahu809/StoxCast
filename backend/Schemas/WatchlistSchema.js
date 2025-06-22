const {Schema} = require("mongoose");

const WatchlistSchema = new Schema({
    name: String,
    token: String,
    price: Number,
    percent: String,
    isDown: Boolean
});

module.exports = WatchlistSchema;