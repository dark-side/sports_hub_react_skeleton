import React, { useState } from 'react';
import Brand from '../common/Brand';
import {
  Wrapper,
  Section,
  Title,
  Link,
  Email,
  EmailInput,
  EmailButton,
  Bottom,
  Copyright
} from './styled/FooterStyles';

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
          <div style={{ marginBottom: '5px'}}>Sign up to receive the latest sports news</div>
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
