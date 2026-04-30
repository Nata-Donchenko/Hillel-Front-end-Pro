import {Box, Button, InputBase, Typography} from "@mui/material";
import {NEWSLETTER_TITLE} from "@constants/promo";
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import {NEWSLETTER_PLACEHOLDER} from "@constants/placeholders";
import {NEWSLETTER_BUTTON} from "@constants/buttons";

const FooterNews = () => {
  return (
    <Box sx={{
      bgcolor: 'black',
      borderRadius: 4,
      p: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Typography
        variant='h4'
        sx={{
          color: 'white',
          fontWeight: 900,
          maxWidth: 400,
          lineHeight: 1.2,
        }}
      >
        {NEWSLETTER_TITLE}
      </Typography>
      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 350,
      }}>
        
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'white',
          borderRadius: 20,
          px: 2,
          py: 1,
        }}>
          <MailOutlineIcon sx={{
            color: 'grey.500',
            mr: 1,
          }}/>
          <InputBase
            placeholder={NEWSLETTER_PLACEHOLDER}
            sx={{ flex: 1, fontSize: 14 }}
          />
        </Box>
        
        <Button
          variant='contained'
          sx={{
            bgcolor: 'white',
            color: 'black',
            borderRadius: 20,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              bgcolor: 'grey.100',
            }
          }}
        >
          {NEWSLETTER_BUTTON}
        </Button>
      
      </Box>
    
    </Box>
  );
};

export default FooterNews;