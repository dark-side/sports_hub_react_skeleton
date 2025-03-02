import React from 'react';
import { InputContainer, TopSection, FieldText, InputField, ForgotLink } from '../styled/LoginStyles';

const PasswordField = ({ password, handlePasswordChange, isLogin }) => (
  <InputContainer>
    <TopSection>
      <FieldText>Password</FieldText>
      {isLogin && <ForgotLink href="/forgot">Forgot password?</ForgotLink>}
    </TopSection>
    <InputField name="password" type="password" value={password} onChange={handlePasswordChange} />
  </InputContainer>
);

export default PasswordField;
