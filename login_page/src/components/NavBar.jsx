import React from 'react'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';




const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"black",color:"white"}}  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavBar
          </Typography>
      <Typography>
      <BootstrapButton sx={{marginRight:"10px",backgroundColor:"darkblue",borderColor:"darkblue"}}  variant="contained" disableRipple>
      <Link sx={{gap:"10px"}} to="/">home</Link>
        </BootstrapButton>
      <BootstrapButton sx={{marginRight:"10px",backgroundColor:"darkblue",borderColor:"darkblue"}}  variant="contained" disableRipple>
      <Link to="/Sign_up">Sign up</Link>
      </BootstrapButton>
      <BootstrapButton sx={{marginRight:"10px",backgroundColor:"darkblue",borderColor:"darkblue"}}  variant="contained" disableRipple>
      <Link sx={{gap:"10px"}} to="/Login">login</Link>
        </BootstrapButton>
      </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
