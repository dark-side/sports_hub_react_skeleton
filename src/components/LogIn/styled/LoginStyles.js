import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  position: relative;
`;

export const Logo = styled.a`
  position: absolute;
  width: 253px;
  height: 83px;
  z-index: 50;
`;

export const LeftImage = styled.img`
  height: 100vh;
  mask-image: linear-gradient(to bottom, #0000004D 0%, #0000004D 100%);
`;

export const RightContainer = styled.div`
  width: calc(100% - 595px);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  margin-right: 60px;
  user-select: none;
`;

export const TopText = styled.div`
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  color: var(--gray-dark);
  margin-right: 40px;
`;

export const TopButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 32px;
  border: 1px solid var(--primary-red);
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  color: var(--primary-red);
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 62px);
`;

export const Section = styled.form`
  .section-text {
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 32.68px;
    color: var(--black);
    user-select: none;
  }

  .social {
    display: flex;
    align-items: center;
    margin: 20px 0;

    a:not(:first-child) {
      margin-left: 15px;
    }

    i {
      height: 32px;
      width: 32px;
    }
  }

  .top-title {
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
  }

  .input {
    height: 82px;
    &:not(:first-child) {
      margin-top: 5px;
    }

    &-double.input {
      display: flex;
      margin-top: 20px;
    }

    .field-text {
      font-family: "Roboto";
      font-size: 10px;
      font-weight: 500;
      line-height: 11px;
      color: var(--gray);
      text-transform: uppercase;
    }

    .top-half {
      width: 178px;

      &:first-child {
        margin-right: 40px;
      }
    }

    .top-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      .forgot {
        font-family: "Open Sans";
        font-size: 10px;
        font-weight: 600;
        line-height: 14px;
        color: var(--blue-two);
      }
    }

    input {
      width: 100%;
      height: 42px;
      font-family: "Open Sans";
      font-size: 12px;
      font-weight: 600;
      line-height: 17px;
      border: 1px solid #D8D8D8;
      text-indent: 15px;

      &:focus-visible {
        outline: none;
      }
    }
  }

  button {
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: var(--white-one);
    width: 390px;
    height: 42px;
    background-color: var(--primary-red);
    text-transform: uppercase;
    margin-top: 42px;
  }

  input.ng-invalid {
    border-color: var(--primary-red);
  }

  .error-message {
    margin-top: 5px;
    font-family: "Roboto";
    font-size: 10px;
    font-weight: 500;
    line-height: 11px;
    color: var(--primary-red);
  }
`;

export const SectionText = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 32.68px;
  color: var(--black);
  user-select: none;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  a:not(:first-child) {
    margin-left: 15px;
  }

  i {
    height: 32px;
    width: 32px;
  }
`;

export const TopTitle = styled.div`
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
`;

export const InputContainer = styled.div`
  height: 82px;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const InputDoubleContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const FieldText = styled.div`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 11px;
  color: var(--gray);
  text-transform: uppercase;
`;

export const TopHalf = styled.div`
  width: 178px;

  &:first-child {
    margin-right: 40px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ForgotLink = styled.a`
  font-family: "Open Sans";
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  color: var(--blue-two);
`;

export const InputField = styled.input`
  width: 100%;
  height: 42px;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  border: 1px solid #D8D8D8;
  text-indent: 15px;

  &:focus-visible {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 11px;
  color: var(--primary-red);
`;

export const SubmitButton = styled.button`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: var(--white-one);
  width: 390px;
  height: 42px;
  background-color: ${props => (props.disabled ? '#d3d3d3' : 'var(--primary-red)')};
  text-transform: uppercase;
  margin-top: 42px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? '#d3d3d3' : 'var(--primary-red)')};
  }
`;
