import React from 'react';
import { Title, Name, DividerLine } from '../styled/DividerStyles';

const SmallDivider = ({ title }) => {
  return (
    <Title>
      <Name>{title}</Name>
      <DividerLine />
    </Title>
  );
};

export default SmallDivider;