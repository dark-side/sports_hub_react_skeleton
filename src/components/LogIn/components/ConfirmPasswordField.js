import React from 'react';
import { InputContainer, TopSection, FieldText, InputField, ErrorMessage } from '../styled/LoginStyles';

const ConfirmPasswordField = ({ confirmPassword, handleConfirmPasswordChange, passwordError }) => (
  <InputContainer>
    <TopSection>
      <FieldText>Confirm Password</FieldText>
    </TopSection>
    <InputField name="confirmPassword" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
  </InputContainer>
);

export default ConfirmPasswordField;
