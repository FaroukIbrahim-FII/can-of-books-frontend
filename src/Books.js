import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

class Books extends Component {
    render() {
        // console.log(this.props.booksArr);
        return (
            <div>
                {/* <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{this.props.bookTitle}</h3>
                            <p>{this.props.bookDescription}</p>
                            <p>{this.props.bookStatus}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}

                {/* <Carousel>
                    {this.props.booksArr.length && this.props.booksArr.map((book, idx) => (

                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>{book.bookTitle}</h3>
                                <p>{book.bookDescription}</p>
                                <p>{book.bookStatus}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel> */}

                {this.props.booksArr.map(item => {
                    return(
                    < Card style={{ width: '18rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>{item.bookTitle}</Card.Title>
                            <Card.Text>
                                {item.bookDescription}
                            </Card.Text>
                            <Card.Text>
                            Availability : {item.bookStatus}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary" type="submit" onClick={() => this.props.deleteBook(item._id)} >Delete</Button>
                        </Card.Footer>
                    </Card >
                    )
                })}

                {/* <Carousel>

                    {this.props.booksArr.map(item => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y="
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>{item.bookTitle}</h3>
                                    <p> {item.bookDescription}</p>
                                    <h5> Availability : {item.bookStatus}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel> */}

            </div>
        );
    }
}

export default Books;