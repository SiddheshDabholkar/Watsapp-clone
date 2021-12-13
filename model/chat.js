import { model, Schema } from ("mongoose");
const { ObjectId } = Schema.Types;

const chatSchema = new Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    message:String,
}, { timestamps: true });
export default  model("Chat", chatSchema);
