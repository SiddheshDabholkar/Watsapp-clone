const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const groupSchema = new Schema(
  {
    groupName: String,
    groupAbout: String,
    groupAdmin: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    groupUsers: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
module.exports = model("Group", groupSchema);
