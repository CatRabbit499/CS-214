const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moviereviewSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    moviename: {
        type: String,
        required: true,
        trim: true
    },
    moviereview: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
});
const MovieReview = mongoose.model('moviereview', moviereviewSchema);
module.exports = MovieReview;