const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    profilePic: {
      type: String,
    },
    about: {
      type: String,
    },
    groups: [{ type: ObjectId, ref: "Groups" }],
    groupAdmin: [{ type: ObjectId, ref: "Groups" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
