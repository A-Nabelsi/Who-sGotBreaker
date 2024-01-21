import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper,
  Box,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export default function SchedulePage() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUpload, setAnchorElUpload] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUploadMenu = (event) => {
    setAnchorElUpload(event.currentTarget);
  };

  const handleCloseUploadMenu = () => {
    setAnchorElUpload(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenUploadMenu}
          >
            <CloudUploadIcon />
          </IconButton>
          <Menu
            id="menu-appbar-upload"
            anchorEl={anchorElUpload}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElUpload)}
            onClose={handleCloseUploadMenu}
          >
            <MenuItem onClick={handleCloseUploadMenu}>Upload New Schedule</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Schedule
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <PersonIcon htmlColor="white" />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>Sign out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            {hours.map((hour, index) => (
              <Typography key={index} variant="body2" sx={{ textAlign: 'right', paddingRight: 1, height: '48px', display: 'flex', alignItems: 'center' }}>
                {hour}
              </Typography>
            ))}
          </Grid>
          {days.map((day, index) => (
            <Grid item xs key={index}>
              <Typography variant="h6" align="center" sx={{ marginBottom: 1 }}>
                {day}
              </Typography>
              {hours.map((hour, index) => (
                <Paper key={hour} variant="outlined" sx={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 0.5 }} />
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
