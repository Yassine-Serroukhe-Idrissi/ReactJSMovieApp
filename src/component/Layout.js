import {Link } from "react-router-dom";
import React from "react";
import Navbar from "react-bootstrap/Navbar"

import { Container,Nav,Form,Button } from "react-bootstrap";

export default function Layout(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">React Movie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/popular">Popular</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}