const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const userSchema = new Schema({}, { timestamps: true });
module.exports = model("User", userSchema);
