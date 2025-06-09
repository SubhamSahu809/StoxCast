const mongoose = require("mongoose");
const UserSchema = require("../Schemas/UserSchema");
const bcrypt = require("bcryptjs");

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("user", UserSchema);
