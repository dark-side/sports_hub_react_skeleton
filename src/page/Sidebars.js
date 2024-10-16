import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
  const headerStyle = { backgroundColor: 'red', textAlign: 'center', color: 'white', height: '50px' };
  const rowStyle = {
    textAlign: 'center',
    left: '15%',
    position: 'relative',
    fontSize: 'large',
    fontFamily: 'monospace',
    marginTop: '80px',
  };
  const colStyle = { textAlign: 'left', marginTop: '50px' };
  const linkStyle = { marginRight: '10px', color: 'black' };
  const marginStyle = { margin: '3%' };

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
      return <p>{link.name}</p>;
    });
  }

  return (
    <>
      <div style={headerStyle}>Sports Hub</div>

      <Row style={rowStyle}>
        <Col style={colStyle}>{generateLinks()}</Col>
        <Row style={colStyle}>
          <Col>
            <a href="#home" style={linkStyle}>
              Follow
            </a>
          </Col>
          <Row style={marginStyle}>
            <Col>
              <a href="#link" style={linkStyle}>
                <FaFacebook />
              </a>
              <a href="#link" style={linkStyle}>
                <FaTwitter />
              </a>
            </Col>
          </Row>

          <Row style={marginStyle}>
            <Col>
              <a href="#link" style={linkStyle}>
                <FaGoogle />
              </a>
              <a href="#link" style={linkStyle}>
                <FaYoutube />
              </a>
            </Col>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default Sidebar;
