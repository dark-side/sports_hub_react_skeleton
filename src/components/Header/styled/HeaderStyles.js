import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  height: 5rem;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  width: 160px;

  .search-icon {
    width: 14px;
    height: 14px;
    margin-left: 40px;
    margin-right: 20px;
  }

  input {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;

    &:focus-visible {
      outline: none;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 115px;
  border-left: 1px solid var(--gray-two);
  border-right: 1px solid var(--gray-two);

  .share {
    width: 38px;
    height: 22px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: var(--gray);
  }

  a {
    display: flex;
  }

  * {
    margin-right: 10px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  flex-grow: 1;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  color: var(--red);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 32px;

    &.log-in {
      border: 1px solid var(--red);
    }
  }
`;

export const LangContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;

  select {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    line-height: 17px;
    background: url('data:image/svg+xml,<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.50293 6L0.73979 0L10.2661 0L5.50293 6Z" fill="black" /> </svg>') right 0.3rem center / 8px 11px no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 40px;
    text-align: start;

    &:focus-visible {
      outline: none;
    }
  }
`;