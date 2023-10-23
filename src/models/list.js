const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const list = new Schema({
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    From: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("list", list)