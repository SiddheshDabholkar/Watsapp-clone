const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const GroupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    users: [{ type: ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Group", GroupSchema);
