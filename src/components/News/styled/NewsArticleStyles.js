import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleContainer = styled.div`
  height: 460px;
  width: 1060px;
  margin-bottom: 40px;
  position: relative;
  display: block;
`;

export const Photo = styled.img`
  width: 815px;
  height: 455px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 290px;
  background-color: var(--gray-light);
  position: absolute;
  top: 85px;
  left: 625px;
  padding: 40px 20px 20px 20px;
  z-index: 100;
`;

export const Publish = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 15px;
  color: var(--text-dark-gray);
`;

export const Title = styled.div`
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 15px;
  color: var(--red);
`;

export const Body = styled.div`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: var(--black-two);
`;

export const More = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 42px;
  background-color: var(--primary-red);
  color: var(--white-one);
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
  margin-top: auto;
  text-decoration: none;
`;

export const Share = styled(Link)`
  display: flex;
  align-items: center;
  height: 42px;
  width: 100%;
  margin-top: auto;
  color: var(--text-dark-gray);
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;