import { model, Schema } from ("mongoose");
const { ObjectId } = Schema.Types;

const chatSchema = new Schema({}, { timestamps: true });
export default  model("Chat", chatSchema);
