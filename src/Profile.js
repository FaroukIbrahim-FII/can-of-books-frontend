import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col } from 'react-bootstrap';
import './Login.css';

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.auth0.user.name,
            Email: this.props.auth0.user.email,
        }
    }

    render() {
        return (
            <Row >
                {Array.from({ length: 1 }).map(() => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{this.state.Name}</Card.Title>
                                <Card.Title>{this.state.Email}</Card.Title>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        )
    }
}

export default withAuth0(Profile);