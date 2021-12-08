import React from "react";
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class AloneMeeting extends Component {

    state = {
        showA: true,
        setShowA: true,
        showB: true, 
        setShowB: true
    }

    toggleShowA=()=>{
        this.setState({
            showA: !this.state.showA
        })
    }

    toggleShowB=()=>{
        this.setState({
            showB: !this.state.showB
        })
    }


    render() {
        return(
            <div className="container-fluid">
                <head>

                </head>
                <footer>
                    <div>
                        <Row>
                            <Col md={6} className="mb-2">
                                <Button onClick={this.toggleShowA} className="mb-2">
                                Toggle Toast <strong>with</strong> Animation
                                </Button>
                                <Toast show={this.state.showA} onClose={this.toggleShowA}>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                                </Toast>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Button onClick={this.toggleShowB} className="mb-2">
                                Toggle Toast <strong>without</strong> Animation
                                </Button>
                                <Toast onClose={this.toggleShowB} show={this.state.showB} animation={false}>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                                </Toast>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </div>
        )
    }
}

export default AloneMeeting;