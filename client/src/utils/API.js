import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    // Search the Google Books API for books
    search: function(query) {
        return axios.get(BASEURL + query);
    },
    // Find a specific book
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Gets the books saved in the database
    getSaved: function() {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
}