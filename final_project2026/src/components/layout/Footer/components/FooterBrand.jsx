import {Box, Typography} from "@mui/material";
import { Link as RouterLink } from 'react-router'
import {SITE_NAME} from "@constants/site_name";
import {FOOTER_DESCRIPTION, FOOTER_SOCIALS} from "@constants/footer";

const FooterBrand = () => {
  return (
    <Box sx={{
      maxWidth: 300,
      flexShrink: 0,
    }}>
      
      <Typography
        component={RouterLink}
        to='/'
        variant='h6'
        sx={{
          fontWeight: 900,
          color: 'black',
          textDecoration: 'none',
          letterSpacing: 1,
        }}
      >
        {SITE_NAME}
      </Typography>
      
      <Typography
        variant='body2'
        sx={{
          color: 'grey.600',
          mt: 2,
          lineHeight: 1.7,
        }}
      >
        {FOOTER_DESCRIPTION}
      </Typography>
      
      <Box sx={{
        display: 'flex',
        gap: 1.5,
        mt: 3
      }}>
        {FOOTER_SOCIALS.map((social) => (
          <Box
            key={social.name}
            component='a'
            href={social.url}
            terget='_blank'
            rel="noopener noreferrer"
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': { borderColor: 'grey.500' }
            }}
          >
            <Box
              component='img'
              src={social.icon}
              alt={social.name}
              sx={{ width: 28, height: 28 }}
            >
            
            </Box>
          </Box>
          
        ))}
        
      </Box>
      
    </Box>
  );
};

export default FooterBrand;