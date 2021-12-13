import { model, Schema } from "mongoose";
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
export default model("Group", groupSchema);
