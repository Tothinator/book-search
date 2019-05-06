import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";
import SaveBtn from "../components/SaveBtn";
import Hero from "../components/Hero";


class Search extends Component {

    state = {
        books: [],
        query: "",
    };

    search = () => {
        API.search(this.state.query)
            .then(res => {

                this.setState({ query: "" });
                
                res.data.items.map(book => {

                    const newBook = {
                        _id: book.id,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks.smallThumbnail,
                        link: book.volumeInfo.infoLink
                    }

                    API.getBook(newBook._id)
                        .then(res => {
                            res.data ? newBook.saved = true : newBook.saved = false;

                            this.setState( state => {
                                const books = state.books.concat(newBook);
                                // console.log(newBook);
                                return {
                                    books: books,
                                    query: state.query
                                }
                            });
                        })
                        .catch(err => console.log(err));
                    
                });

            })
            .catch(err => console.log(err));
    };

    saveBook = id => {
        const book = this.state.books.filter(book => book.id === id)[0];
        const data = {
            _id: book._id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        }
        API.saveBook(data)
            .then(res => {
                console.log(res);
                this.setState(state => {
                    let books = state.books;
                    books = books.map(book => {
                        if (book._id === data._id) {
                            book.saved = true;
                            return book;
                        } else {
                            return book;
                        }
                    });

                    return {
                        books: books,
                        query: ""
                    }
                })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.query) {
            this.search();
        }
    }

    render() {
        return (
            <div>
                <Hero>
                    <h3>Search for books using the Google Book API and save your favorites!</h3>
                    <Container>
                        <Row>
                            <Col size="sm-12">
                                <form>
                                    <Input 
                                        value={this.state.query}
                                        onChange={this.handleInputChange}
                                        name="query"
                                        placeholder="Google Book Search"
                                    />
                                    <FormBtn
                                        disabled={!this.state.query}
                                        onClick={this.handleFormSubmit}
                                    >Search</FormBtn>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </Hero>
                <Container center>
                    {this.state.books.length ? (
                        <Row>                    
                            {this.state.books.map(book => (
                                <Col key={book._id}
                                    size="sm-12 md-6">
                                    <Card 
                                        title={book.title}
                                        subTitle={book.authors}
                                        image={book.image}
                                        bodyText={book.description}
                                        link={book.link}
                                    >
                                        <SaveBtn 
                                            onClick={() => this.saveBook(book._id)}
                                            saved={book.saved}
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div></div>
                    )}
                </Container>
            </div>
        )
    }
}

export default Search;