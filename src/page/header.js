// React
import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, InputGroup, Col, Row } from 'react-bootstrap';
// Icons
import { FaFacebook, FaTwitter, FaSearch, FaGoogle } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <Col lg="5" style={{ borderRight: 'solid grey 1px' }}>
                <Form inline style={{ flex: 3 }}>
                    <InputGroup>
                        <Button variant='outline-link'><FaSearch /></Button>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ border: 'none' }} />
                    </InputGroup>
                </Form>
            </Col>

            <Col lg="3" style={{ alignContent: 'space-around', textAlign: 'center', borderRight: 'solid grey 1px' }}>
                <a href="#home" style={{ marginRight: '10px', color: 'black' }}>Share</a>
                <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaFacebook /></a>
                <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaTwitter /></a>
                <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaGoogle /></a>
            </Col>
            <Col lg="4">
                <Row>
                    <Col style={{ marginRight: 0, paddingRight: 0 }}>
                        <Button variant="outline-link" style={{ color: 'red', width: '125px' }}>Sign up</Button>
                    </Col>
                    <Col style={{ marginLeft: 0, paddingLeft: 0 }}>
                        <Button variant="outline-secondary" style={{ color: 'red', border: 'solid red 1px', width: '125px' }}>Log in</Button>
                    </Col>
                    <Col>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ border: 'none', color: 'black', backgroundColor: 'white' }}>
                                EN
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">en</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">ua</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">fr</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                </Row>
            </Col>

        </>
    );
}

export default Header;