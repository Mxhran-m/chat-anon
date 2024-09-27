const mongoose = requiere("mongoose");

// // const userSchema = new mongoose.Schema({
// //     user: String,
// //     email: String,
// //     password: String,
// // })

// // const User = mongoose.model("User" ,userSchema);

// const content = new mongoose.Schema({
//     message: String,

// });

// const Message = mongoose.model("Message", content);

// const createdAt = new mongoose.Schema({
//     createdTime: {type: time, default: Time.now} 
// })

const messageSchema = new mongoose.messageSchema({
    content :{
        type: String,
        required: true,
        trim: true,
    },
    createdAt :{
        type: Date,
        default: Date.now
    }
});

const message = mongoose.model('message', messageSchema);

export default message;