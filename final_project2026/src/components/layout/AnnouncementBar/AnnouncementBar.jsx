import {useState} from "react";
import {Box, Container, IconButton, Typography} from "@mui/material";
import {PROMO_LINK_TEXT, PROMO_TEXT} from "@constants/promo.js";
import { Link as RouterLink } from 'react-router'
import { Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {NAV_PATHS} from "@constants/navbar_navigation.js";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null
  
  return (
    <Box sx={{
      bgcolor: 'black',
      color: 'white',
      py: 1
    }}>
      
      <Container maxWidth='xl'>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <Typography variant='body2'>
            {PROMO_TEXT}{' '}
            <Link
              component={RouterLink}
              to={NAV_PATHS.SIGNUP}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textDecorationColor: 'white',
              }}
            >
              {PROMO_LINK_TEXT}
            </Link>
          </Typography>
          
          <IconButton
            onClick={() => setIsVisible(false)}
            size='small'
            sx={{
              color: 'white',
              position: 'absolute',
              right: 0,
            }}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </Box>
        
      </Container>
      
    </Box>
  );
};

export default AnnouncementBar;