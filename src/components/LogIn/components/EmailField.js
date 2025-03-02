import React from 'react';
import { InputContainer, TopSection, FieldText, InputField, ErrorMessage } from '../styled/LoginStyles';

const EmailField = ({ email, handleEmailChange, emailError }) => (
  <InputContainer>
    <TopSection>
      <FieldText>Email address</FieldText>
    </TopSection>
    <InputField name="email" type="email" value={email} onChange={handleEmailChange} />
    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
  </InputContainer>
);

export default EmailField;
