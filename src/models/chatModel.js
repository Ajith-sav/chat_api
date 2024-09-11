import {Schema, model } from 'mongoose';

const chatModel = new Schema(
    {
        chatName:{type:String, trim:true, required:true},
        isGroupChat:{type:Boolean, default:false},
        users: [
            {
                type: monogoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        latestMessage: {
            type:monogoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin: {
            type:monogoose.Schema.Types.ObjectId,
            ref:"User",
        }
    },
    {
        timestamps:true
    }
)

const Chat = model("Chat", chatModel)

export default Chat;