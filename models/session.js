const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
  token: { type: String, required: true },
  userID: { type: mongoose.Schema.ObjectId, required: true },
});
const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;
