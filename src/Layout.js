import React, { useEffect } from 'react';
import { Drawer, Typography } from '@mui/material';
import Navigation from './components/Header/Navigation';
import SideNavigation from './components/Sidebar/SideNavigation';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNews } from './app/slices/newsSlice';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 80px - 128px);
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-top: 4rem;
`;

const DrawerContent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0 0 0;
`;

const Content = styled.div`
  width: 815px;
  min-width: 815px;
  max-width: 815px;
  margin-bottom: 80px;
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 20px;
  color: var(--text-gray);
  margin-left: 240px;

  a {
    margin: 0 5px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-of-type {
      color: var(--primary-red);
    }
  }

  svg {
    height: 10px;
    width: 5px;
    margin: 0 5px;

    &:last-of-type {
      path {
        fill: var(--primary-red);
      }
    }
  }
`;

const ArrowRightIcon = () => (
  <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.161129 1.09856L3.0307 4.64765L0.161129 8.2065C-0.388103 8.88568 0.600515 9.73467 1.14975 9.05548L4.36698 5.07702C4.56583 4.83112 4.56583 4.47393 4.36698 4.22804L1.14975 0.249574C0.600515 -0.429613 -0.388103 0.419371 0.161129 1.09856Z" fill="#B2B2B2"/>
  </svg>
);

const Layout = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <LayoutContainer>
      <Navigation />
      <Container>
        <Drawer
          variant="permanent"
          open
          sx={{
            width: '240px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '240px',
              backgroundColor: '#fff',
              top: 'inherit',
              position: 'absolute',
              border: 'none',
              paddingLeft: 0,
              boxShadow: 'none',
            },
          }}
        >
          <SideNavigation />
        </Drawer>

        <DrawerContent>
          <Content>
            <BreadcrumbsContainer>
              <Link to="/nfl">NFL</Link>
              <ArrowRightIcon />
              <Link to="/afc-south">AFC South</Link>
              <ArrowRightIcon />
              <Typography component="span">Tennessee</Typography>
            </BreadcrumbsContainer>
            <Outlet />
          </Content>
        </DrawerContent>
      </Container>
      <Footer />
      <div className="watermark watermark-1" style={{ left: '290px', top: '160px' }}>Tennessee</div>
    </LayoutContainer>
  );
};

export default Layout;