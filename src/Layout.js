import React, { useEffect } from 'react';
import { Drawer, IconButton, Typography, Breadcrumbs, Link } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Navigation from './components/Header/Navigation';
import SideNavigation from './components/Sidebar/SideNavigation';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNews } from './app/slices/newsSlice';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 0 2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

  a:last-of-type {
    color: var(--primary-red);
  }

  .MuiIconButton-root {
    margin: 0 5px;
    height: 10px;
    width: 5px;

    .MuiSvgIcon-root {
      fill: var(--primary-red);
    }
  }
`;

const Watermark = styled.div`
  left: 290px;
  top: 160px;
  z-index: 25;
  position: absolute;
`;

const Layout = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
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
                backgroundColor: 'white',
                top: 'inherit',
                alignitems: 'center',
                position: 'absolute'
              },
            }}
          >
            <SideNavigation />
          </Drawer>

          <div style={{ marginLeft: '240px', padding: '16px', flex: 1 }}>
            <BreadcrumbsContainer>
              <Breadcrumbs aria-label="breadcrumb">
                <Link href="/nfl">NFL</Link>
                <IconButton>
                  <ArrowForward />
                </IconButton>
                <Link href="/afc-south">AFC South</Link>
                <IconButton>
                  <ArrowForward />
                </IconButton>
                <Typography>Tennessee</Typography>
              </Breadcrumbs>
            </BreadcrumbsContainer>
            <div style={{ marginBottom: '16px' }}>
              <Outlet />
            </div>
          </div>
        </Container>
        <Footer />
        <Watermark className="watermark-1">ALL</Watermark>
      </LayoutContainer>
    </>
  );
};

export default Layout;