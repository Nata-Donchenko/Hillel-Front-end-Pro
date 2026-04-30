import {Typography} from "@mui/material";
import { Link as RouterLink } from 'react-router'
import {SITE_NAME} from "@constants/site_name.js";
import {NAV_PATHS} from "@constants/navbar_navigation.js";

const NavLogo = () => {
  return (
    <Typography
      component={RouterLink}
      to={NAV_PATHS.HOME}
      variant='h6'
      sx={{
        fontWeight: 700,
        color: 'black',
        textDecoration: 'none',
        letterSpacing: 1,
        flexShrink: 0,
      }}
    >
      {SITE_NAME}
    
    </Typography>
  );
};

export default NavLogo;