import React, {useEffect} from 'react';
import { Drawer, IconButton, Typography, Breadcrumbs, Link } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Navigation from './components/Header/Navigation';
import SideNavigation from './components/Sidebar/SideNavigation';
import Footer from './components/Footer/Footer';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNews } from './app/slices/newsSlice';

const Layout = () => {
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchNews());
    }, [dispatch]);

  return (
    <>
    <div className="layout">
      <Navigation />
      <div className="container max-w-full">
        <Drawer
          variant="permanent"
          open
          sx={{
            width: '240px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '240px',
              backgroundColor: 'white',
            },
          }}
        >
          <SideNavigation />
        </Drawer>

        <div style={{ marginLeft: '240px', padding: '16px' }}>
          <div className="breadcrumbs">
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
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer/>
      <div className="watermark watermark-1">ALL</div>
      </div>
    </>
  );
};

export default Layout;
