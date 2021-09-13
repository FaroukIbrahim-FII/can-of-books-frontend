import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Books from './Books';
import { Row } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      booksArr : []
    }
  }

  componentDidMount = () =>{
    console.log('hi');
    const user = this.props.auth0;
    const email = user.email;
    console.log(user);
    axios
    .get(`https://can-of-books-faroukibrahim.herokuapp.com/books?email=${email}`)
    .then( result =>{
      this.setState({
        booksArr:result.data
      })
      console.log(this.state.booksArr);
    })
    .catch (err =>{
      console.log('error');
    })
  }
  render() {
    return(
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Row className="justify-content-between" className='row'>
            
              <Books
               booksArr={this.state.booksArr}
              />

          </Row>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
