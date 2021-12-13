import { model, Schema } from "mongoose";
const { ObjectId } = Schema.Types;

const groupSchema = new Schema({}, { timestamps: true });
export default model("Group", groupSchema);
