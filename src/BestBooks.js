import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import Books from './Books';
import { Row, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import Modules from './modalForm';
import UpdateBooks from './UpdateModal'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
      show: false,
      showUpdate : false,
      bookTitle : '',
      bookDescription : '',
      bookStatus : '',
      ownerEmail : '',
      bookid :''


    }
  }

  // get to server 
  componentDidMount = () => {
    // console.log('hi');
    const user = this.props.auth0;
    const email = user.email;
    // console.log(user);
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
    const user = this.props.auth0;
    const email = user.email;

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

  //deletebooks
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`https://can-of-books-faroukibrahim.herokuapp.com/books/${id}?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting book');
      })
  }


  showHandler = () => {
    this.setState({

      show: true,


    })
  }
  
  handleClose = () => {
    this.setState({
      showUpdate : false
    })
  }

  closeHandler = () => {
    this.setState({

      show: false,
    })
  }



  showUpdateForm = (item) => {
    this.setState({
      showUpdate: true,
      bookTitle : item.bookTitle,
      bookDescription : item.bookDescription,
      bookStatus : item.bookStatus,
      bookid : item._id
    })
  }




  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      bookTitle : event.target.bookTitle.value,
      bookDescription : event.target.bookDescription.value,
      bookStatus : event.target.bookstus.value,
      ownerEmail : email
    }

    axios
    .put(`https://can-of-books-faroukibrahim.herokuapp.com/updatebooks/${this.state.bookid}`,obj)
    .then(result =>{
      this.setState({
        booksArr:result.data,
        showUpdate : false
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
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
            showUpdateForm = {this.showUpdateForm}
          />

        </Row>


        <UpdateBooks
       
        show = {this.state.showUpdate}
        handleClose = {this.handleClose}
        bookTitle = {this.state.bookTitle}
        bookDescription = {this.state.bookDescription}
        bookStatus = {this.state.bookStatus}
        updateBook={this.updateBook}

        />


        {/* <Books
          booksArr={this.state.booksArr}
        /> */}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);