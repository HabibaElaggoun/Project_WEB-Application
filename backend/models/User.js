const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },
  birth: Number,
  image: String,
  address: String,
  email: { type: String, required: [true, "email is required"], lowercase: true, },
  password: String,
  phone: Number,
  createdOn: { type: Date, default: Date.now() },
  role: {
    type: String,
    enum: ["parent", "educator", "admin"],
    default: "parent",
  },
  isBanned: { type: Boolean, default: false },
}); 
module.exports = User = mongoose.model("user", userSchema);