const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const groupSchema = new Schema({}, { timestamps: true });
module.exports = model("Group", groupSchema);
