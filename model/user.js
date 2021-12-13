import { model, Schema } from "mongoose";
const { ObjectId } = Schema.Types;

const userSchema = new Schema({}, { timestamps: true });
export default model("User", userSchema);
