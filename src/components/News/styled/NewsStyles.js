import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: calc(100vh - 80px - 128px);
  width: 100%;
  max-width: 100%;
  position: relative;
`;

export const Content = styled.div`
  width: 815px;
  min-width: 815px;
  max-width: 815px;
  margin-bottom: 80px;
  margin-left: 252px; /* Offset for sidenav, matches Angular */
`;

export const Main = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`;

export const Left = styled.div`
  height: 100%;
  flex-grow: 1;
  margin-right: 20px;
`;

export const Right = styled.div`
  height: 100%;
  flex-grow: 1;
`;

export const Side = styled.div`
  width: 285px;
  min-width: 285px;
  max-width: 285px;
  position: relative;
  margin-left: 20px;
`;

export const Cards = styled.div`
  width: 285px;
  margin-top: 750px;
  margin-left: 0;
  margin-bottom: 20px;
`;