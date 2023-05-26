const mongoose = require("mongoose");
const DonationSchema = mongoose.Schema({
  product_id: { type: mongoose.Schema.ObjectId, required: true },
  user_id: { type: mongoose.Schema.ObjectId, required: true },
});
const Donation = mongoose.model("Donation", DonationSchema);
module.exports = Donation;
