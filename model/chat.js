const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const chatSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    message: String,
  },
  { timestamps: true }
);
module.exports = model("Chat", chatSchema);
