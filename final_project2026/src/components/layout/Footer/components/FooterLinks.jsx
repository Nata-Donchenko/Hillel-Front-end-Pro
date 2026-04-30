import {Box, Typography} from "@mui/material";
import {FOOTER_LINKS} from "@constants/footer";
import { Link as RouterLink } from 'react-router'

const FooterLinks = () => {
  return (
    <Box sx={{
      display: 'flex',
      gap: '113.5px',
      flex: 1,
      justifyContent: 'flex-end',
    }}>
      {FOOTER_LINKS.map((column) => (
        <Box key={column.title}>
          <Typography
            variant='subtitle1'
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: 1,
            }}
          >
            {column.title.toUpperCase()}
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}>
            {column.links.map((link) => (
              <Typography
                key={link.path}
                component={RouterLink}
                to={link.path}
                variant='body2'
                sx={{
                  color: 'grey.600',
                  textDecoration: 'none',
                  '&:hover': { color: 'black' }
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
          
        </Box>
      ))}
    </Box>
  );
};

export default FooterLinks;