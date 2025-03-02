import React from 'react';
import { SocialContainer } from '../styled/LoginStyles';
import { Facebook, Google } from '@mui/icons-material';

const SocialLoginButtons = () => (
  <SocialContainer>
    <a href="/facebook">
      <Facebook />
    </a>
    <a href="/gmail">
      <Google />
    </a>
  </SocialContainer>
);

export default SocialLoginButtons;
