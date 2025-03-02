import React from 'react';
import { SocialContainer } from '../styled/LoginStyles';

const SocialLoginButtons = () => (
  <SocialContainer>
    <a href="/facebook">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="/gmail">
      <i className="fab fa-google"></i>
    </a>
  </SocialContainer>
);

export default SocialLoginButtons;
