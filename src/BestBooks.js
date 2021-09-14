import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import Books from './Books';
import { Row,Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import Modules from './modalForm';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
      show: false,
    }
  }

  // get to server 
  componentDidMount = () => {
    console.log('hi');
    const user = this.props.auth0;
    const email = user.email;
    console.log(user);
    axios
      .get(`https://can-of-books-faroukibrahim.herokuapp.com/book?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
        console.log(this.state.booksArr);
      })
      .catch(err => {
        console.log('error');
      })
  }

  // addOneBooks
  addOneBook = (event) => {
    event.preventDefault();
    const  user  = this.props.auth0;
    const email = user.user.email;
    // console.log('user',email);

    const obj = {
      bookTitle: event.target.bookname.value,
      bookDescription: event.target.bookdis.value,
      bookStatus: event.target.bookstus.value,
      ownerEmail: email
    }


    
    axios
      .post(`https://can-of-books-faroukibrahim.herokuapp.com/books`, obj)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('Error on adding data');
      })
  }

  deleteBook = (id) =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .delete(`https://can-of-books-faroukibrahim.herokuapp.com/books/${id}?email=${email}`)
    .then(result =>{
      this.setState({
        booksArr: result.data
      })
    })
    .catch(err=>{
      console.log('error in deleting book');
    })
  }

  showHandler = () => {
    this.setState({
      show: true,
    })
  }

  closeHandler = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>       
        <Button onClick={this.showHandler} >Add a Book</Button>
        <Modules
          show={this.state.show}
          closeHandler={this.closeHandler}
          addOneBook={this.addOneBook}
        />
        <Row className="justify-content-between" className='row'>
          <Books
            booksArr={this.state.booksArr}
            deleteBook={this.deleteBook}
          />
        </Row>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);