const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 4,
        max: 20
    },
    date: {
        type: Date,
        default : Date.now
    }
})


module.exports = mongoose.model('User', userShema);