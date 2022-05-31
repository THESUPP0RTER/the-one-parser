import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'> The One Parser
            </Link></Typography>
            <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={handleMenu}
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>  
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to='/table'><MenuItem onClick={handleClose}>Table</MenuItem></Link>
                <Link to='/charts'><MenuItem onClick={handleClose} link = '/charts'>Charts</MenuItem></Link>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;