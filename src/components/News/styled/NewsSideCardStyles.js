import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideCardContainer = styled.div`
  display: block;
  &.space {
    margin-top: 40px;
  }
`;

export const SideMain = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  position: relative;
  top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 34px;
  background-color: var(--gray-light-two);
  color: var(--black);
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const CardText = styled.div`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: var(--black-three);
  color: var(--white-one);
  height: 64px;
  padding: 12px;
`;

export const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  margin-top: 15px;
`;

export const CardLike = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: var(--gray-three);
`;

export const CardLikeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  border-radius: 3px;
  background: var(--blue);

  svg {
    width: 16px;
    height: 14px;
    margin-right: 5px;
  }
`;
