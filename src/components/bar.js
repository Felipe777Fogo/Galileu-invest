import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1,marginBottom:'64px' }}>
        <AppBar >
          <Toolbar sx={{ background:'#dfff00', display: 'flex', justifyContent: 'space-between' }}>


            <Image 
              src='/logo01.jpg'
              alt="Galileu" 
              width="150"
              height="45"
            />

          </Toolbar>
        </AppBar>
      </Box>
    );
  }