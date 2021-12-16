const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    name: String,
    profilePic: String,
    phone: String,
    about: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
