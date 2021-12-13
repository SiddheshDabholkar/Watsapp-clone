import { model, Schema } from "mongoose";
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

export default model("User", userSchema);
