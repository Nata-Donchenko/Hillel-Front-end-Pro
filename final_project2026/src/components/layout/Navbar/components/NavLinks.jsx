import { useState } from 'react'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link as RouterLink } from 'react-router'
import { useGetCategoriesQuery } from '@store/api/productsApi'
import { NAV_LINKS, NAV_MENU_LABELS } from '@constants/navbar_navigation.js'

const NavLinks = () => {
  const  [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  
  const { data: categories = []} = useGetCategoriesQuery()
  
  const handleOpenMenu = (e) => setAnchorEl(e.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)
  
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
      
      <Button
        onClick={handleOpenMenu}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color: 'black', textTransform: 'none', fontWeight: 400}}
      >
        {NAV_MENU_LABELS.SHOP}
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            sx: { maxHeight: 300, width: 200 }
          }
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.slug}
            component={RouterLink}
            to={`/category/${category.slug}`}
            onClick={handleCloseMenu}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
      
      {NAV_LINKS.map((link) => (
        <Button
          key={link.path}
          component={RouterLink}
          to={link.path}
          sx={{ color: 'black', textTransform: 'none', fontWeight: 400 }}
        >
          {link.label}
        </Button>
      ))}
      
    </Box>
  );
};

export default NavLinks;