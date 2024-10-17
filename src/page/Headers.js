import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, Dropdown, InputGroup, Col, Row, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaSearch, FaGoogle } from 'react-icons/fa';

const colStyle1 = { borderRight: 'solid grey 1px' };
const formStyle = { flex: 3 };
const inputStyle = { border: 'none' };
const colStyle2 = { alignContent: 'center', textAlign: 'center', borderRight: 'solid grey 1px' };
const linkStyle = { marginRight: '10px', color: 'black' };
const buttonStyle1 = { color: 'red', width: '125px' };
const colStyle3 = { marginRight: 0, paddingRight: 0, marginTop: '5px' };
const colStyle4 = { marginLeft: 0, paddingLeft: 0, marginTop: '5px' };
const buttonStyle2 = { color: 'red', border: 'solid red 1px', width: '125px' };
const dropdownStyle = { border: 'none', color: 'black', backgroundColor: 'white' };

const Header = () => {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col lg={5} md={12} style={colStyle1}>
          <Form inline style={formStyle}>
            <InputGroup>
              <Button variant="outline-link">
                <FaSearch />
              </Button>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" style={inputStyle} />
            </InputGroup>
          </Form>
        </Col>

        <Col lg={3} md={12} style={colStyle2}>
          <a href="#home" style={linkStyle}>
            Share
          </a>
          <a href="#link" style={linkStyle}>
            <FaFacebook />
          </a>
          <a href="#link" style={linkStyle}>
            <FaTwitter />
          </a>
          <a href="#link" style={linkStyle}>
            <FaGoogle />
          </a>
        </Col>
        <Col lg={4} md={12}>
          <Row className="align-items-center">
            <Col style={colStyle3}>
              <Button variant="outline-link" style={buttonStyle1}>
                Sign up
              </Button>
            </Col>
            <Col style={colStyle4}>
              <Button variant="outline-secondary" style={buttonStyle2}>
                Log in
              </Button>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownStyle}>
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
      </Row>
    </Container>
  );
};

export default Header;
