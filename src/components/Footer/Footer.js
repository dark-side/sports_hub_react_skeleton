import React, { useState } from 'react';
import styled from 'styled-components';
import Brand from '../common/Brand';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 23rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 225px;
  height: 190px;
  margin-left: 80px;
`;

const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 30px;
  color: var(--black);
`;

const Link = styled.a`
  color: var(--text-dark-gray);
  margin-bottom: 5px;
`;

const Email = styled.div`
  display: flex;
  width: 284px;
  height: 32px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
`;

const EmailInput = styled.input`
  border: 1px solid #D8D8D8;
  height: 100%;
  width: 100%;
  color: var(--text-gray);
  text-indent: 15px;
`;

const EmailButton = styled.button`
  width: 97px;
  height: 100%;
  background-color: var(--primary-red);
  color: var(--white);
`;

const Bottom = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary-red);
`;

const Copyright = styled.div`
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  width: 280px;
  justify-content: center;
  align-items: flex-end;
  margin-right: 62px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
`;

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
      <Wrapper>
        <Section>
          <Title>COMPANY INFO</Title>
          <Link href="/about">About Sports Hub</Link>
          <Link href="/press">News / In the Press</Link>
          <Link href="/advertising">Advertising / Sports Blogger Ad Network</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact Us</Link>
        </Section>

        <Section>
          <Title>CONTRIBUTORS</Title>
          <Link href="/featured-writers">Featured Writers Program</Link>
          <Link href="/featured-team-writers">Featured Team Writers Program</Link>
          <Link href="/internship">Internship Program</Link>
        </Section>

        <Section>
          <Title>NEWSLETTER</Title>
          <div>Sign up to receive the latest sports news</div>
          <Email>
            <EmailInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
            />
            <EmailButton onClick={handleSubscribe}>Subscribe</EmailButton>
          </Email>
        </Section>
      </Wrapper>

      <Bottom>
        <Brand />
        <Copyright>
          <div>Copyright © {new Date().getFullYear()} Sports Hub</div>
          <div>
            <Link href="/privacy">Privacy</Link> / <Link href="/terms">Terms</Link>
          </div>
        </Copyright>
      </Bottom>
    </>
  );
};

export default Footer;
