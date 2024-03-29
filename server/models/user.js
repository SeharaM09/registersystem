const mongoose = require ('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    email:{
        type: String,
        unique: true
    },
    password: String,
    
    userName: String
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;