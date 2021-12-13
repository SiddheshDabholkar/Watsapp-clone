const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const chatSchema = new Schema({}, { timestamps: true });
module.exports = model("Chat", chatSchema);
