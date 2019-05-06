import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import Hero from "../components/Hero";


class Saved extends Component {

    state = {
        savedBooks: [],
    };

    componentDidMount() {
        API.getSaved()
            .then(({ data }) => {
                this.setState({ savedBooks: data })
            })
            .catch(err => console.log(err));
    }

    deleteBook = id => {

        API.deleteBook(id)
            .then(res => {
                console.log(res);
                this.setState( state => {
                    const savedBooks = state.savedBooks.filter(book => book._id !== id);
                    console.log(savedBooks);
                    return {
                        savedBooks: savedBooks,
                    }
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Hero>
                    <h3>Here are books that have been saved by everyone!</h3>
                </Hero>
                <Container center>
                    {this.state.savedBooks.length ? (
                        <Row>                    
                            {this.state.savedBooks.map(book => (
                                <Col key={book._id}
                                    size="sm-12 md-6">
                                    <Card 
                                        title={book.title}
                                        subTitle={book.authors}
                                        image={book.image}
                                        bodyText={book.description}
                                        link={book.link}
                                    >
                                        <DeleteBtn 
                                            onClick={() => this.deleteBook(book._id)}
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div>
                            <h1>There are no saved books!</h1> 
                        </div>
                    )}
                </Container>
            </div>
        )
    }
}

export default Saved;