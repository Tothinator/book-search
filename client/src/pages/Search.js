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
                this.setState({ books: res.data.items, query: "" })
                console.log(this.state.books);
            }
            )
            .catch(err => console.log(err));
    };

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
                                <Col key={book.id}
                                    size="sm-6">
                                    <Card 
                                        title={book.volumeInfo.title}
                                        subTitle={book.volumeInfo.authors}
                                        image={book.volumeInfo.imageLinks.smallThumbnail}
                                        bodyText={book.volumeInfo.description}
                                        link={book.volumeInfo.infoLink}
                                    >
                                        <SaveBtn />
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