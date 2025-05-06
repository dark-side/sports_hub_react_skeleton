import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 23rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 225px;
  height: 190px;
  margin-left: 80px;
`;

export const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 30px;
  color: var(--black);
`;

export const Link = styled.a`
  color: var(--text-dark-gray);
  margin-bottom: 5px;
`;

export const Email = styled.div`
  display: flex;
  width: 284px;
  height: 32px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
`;

export const EmailInput = styled.input`
  border: 1px solid #D8D8D8;
  height: 100%;
  width: 100%;
  color: var(--text-gray);
  text-indent: 15px;
`;

export const EmailButton = styled.button`
  width: 97px;
  height: 100%;
  background-color: var(--primary-red);
  color: var(--white);
`;

export const Bottom = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary-red);
  height: 5rem;
`;

export const Copyright = styled.div`
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  width: 280px;
  justify-content: center;
  align-items: flex-end;
  margin-right: 62px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
`;