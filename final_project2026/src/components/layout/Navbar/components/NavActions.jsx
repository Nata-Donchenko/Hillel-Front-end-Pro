import {Box, IconButton, Badge} from "@mui/material";
import { Link as RouterLink } from 'react-router'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import {NAV_PATHS} from "@constants/navbar_navigation.js";

const NavActions = () => {
  const cartCount = 0
  
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}>
      <IconButton
        component={RouterLink}
        to={NAV_PATHS.CART}
      >
        <Badge
         badgeContent={cartCount}
         color='primary'
         showZero={false}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      
      <IconButton
        component={RouterLink}
        to={NAV_PATHS.LOGIN}
      >
        <PersonOutlineOutlinedIcon />
      </IconButton>
      
    </Box>
  );
};

export default NavActions;