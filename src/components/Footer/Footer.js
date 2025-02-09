import React, { useState } from 'react';
import './footer.scss';
import Brand from '../common/Brand'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <>
    <div className="wrapper">
      <div className="section">
        <div className="title">COMPANY INFO</div>
        <a href="/about">About Sports Hub</a>
        <a href="/press">News / In the Press</a>
        <a href="/advertising">Advertising / Sports Blogger Ad Network</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="section">
        <div className="title">CONTRIBUTORS</div>
        <a href="/featured-writers">Featured Writers Program</a>
        <a href="/featured-team-writers">Featured Team Writers Program</a>
        <a href="/internship">Internship Program</a>
      </div>

      <div className="section">
        <div className="title">NEWSLETTER</div>
        <div>Sign up to receive the latest sports news</div>
        <div className="email">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
    </div>

    <div className="bottom">
      <Brand></Brand>
      <div className="copyright">
        <div>Copyright © {new Date().getFullYear()} Sports Hub</div>
        <div>
          <a href="/privacy">Privacy</a> / <a href="/terms">Terms</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
