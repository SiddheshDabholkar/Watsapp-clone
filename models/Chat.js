const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const ChatSchema = new Schema(
  {
    user: {
      type: ObjectId,
      required: true,
    },
    message: {
      type: ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Chat", ChatSchema);
