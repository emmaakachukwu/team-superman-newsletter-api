const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    content: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

module.exports = mongoose.model('News', newsSchema);