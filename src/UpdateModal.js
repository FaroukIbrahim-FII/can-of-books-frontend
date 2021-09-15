import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class UpdateModal extends React.Component {
    render() {
        return (


            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" name="bookTitle" defaultValue={this.props.bookTitle} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" name="bookDescription" defaultValue={this.props.bookDescription} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Status</Form.Label>
                                <Form.Select size="lg" name="bookstus">
                                    <option>Life Changing</option>
                                    <option>Favorite Five</option>
                                    <option>Recommended To Me</option>
                                </Form.Select>
                            </Form.Group> 



                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateModal;