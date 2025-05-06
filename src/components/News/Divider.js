import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  height: 19px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  margin-right: 10px;
  text-transform: uppercase;
`;

const DividerLine = styled.div`
  border: 1px solid var(--text-gray);
  align-self: flex-end;
  flex: 1;
`;

const SmallDivider = ({ title }) => {
  return (
    <Title>
      <Name>{title}</Name>
      <DividerLine />
    </Title>
  );
};

export default SmallDivider;