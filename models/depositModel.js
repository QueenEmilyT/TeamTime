const { Schema, model } = require('mongoose');

const depositSchema = new Schema({
    amount: {type: Number, required: true },
    reference: {type: String, required: true },
    createdAt: {type: String, required: true } 
})

module.exports = model('deposit', depositSchema);