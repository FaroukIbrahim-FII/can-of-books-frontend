import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Books extends Component {
    render() {
        console.log(this.props.booksArr);
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
                    </Card >
                    )
                })}

            </div>
        );
    }
}

export default Books;