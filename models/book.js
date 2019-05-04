const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: Text,
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;