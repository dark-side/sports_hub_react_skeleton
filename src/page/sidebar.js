// React
import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
// Icons
import { FaFacebook, FaTwitter, FaSearch, FaGoogle, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
    function generateLinks() {
        let links = [
            { name: 'Home', href: '#home' },
            { name: 'Football', href: '#football' },
            { name: 'Basketball', href: '#basketball' },
            { name: 'Tennis', href: '#tennis' },
            { name: 'Baseball', href: '#baseball' },
            { name: 'Golf', href: '#golf' },
            { name: 'Cricket', href: '#cricket' },
        ];

        return links.map((link, index) => {
            return (
                <p>{link.name}</p>
            );
        });
    }

    return (
        <>
            <div style={{ backgroundColor: 'red', textAlign: 'center', color: 'white', height: '50px' }}>
                X Hub
            </div>

            <Row style={{ textAlign: 'center', left: '15%', position: 'relative', fontSize: 'large', fontFamily: 'monospace', marginTop: '80px' }}>
                <Col style={{ textAlign: 'left' }}>
                    {generateLinks()}
                </Col>
                <Row style={{ textAlign: 'left' }}>
                    <Col>
                        <a href="#home" style={{ color: 'black' }}>Follow</a>
                    </Col>
                    <Row style={{ margin: '3%' }}>
                        <Col>
                            <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaFacebook /></a>
                            <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaTwitter /></a>

                        </Col>

                    </Row>

                    <Row style={{ margin: '3%' }}>
                        <Col>
                            <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaGoogle /></a>
                            <a href="#link" style={{ marginRight: '10px', color: 'black' }}><FaYoutube /></a>

                        </Col>

                    </Row>


                </Row>

            </Row>
        </>
    );
}

export default Sidebar;