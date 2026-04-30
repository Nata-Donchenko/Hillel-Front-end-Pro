import React from 'react';
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import NavLogo from "@components/layout/Navbar/components/NavLogo.jsx";
import NavLinks from "@components/layout/Navbar/components/NavLinks.jsx";
import NavSearch from "@components/layout/Navbar/components/NavSearch.jsx";
import NavActions from "@components/layout/Navbar/components/NavActions.jsx";
import {CONTAINER_MAX_WIDTH} from "@constants/layout";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'gray.200',
      }}
    >
      <Container>
       <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          py: 1,
        }}
       >
         <NavLogo />
         <NavLinks />
         <NavSearch />
         <NavActions />
       </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;