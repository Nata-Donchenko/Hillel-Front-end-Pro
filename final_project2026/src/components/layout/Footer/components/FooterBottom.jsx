import {Box, Typography} from "@mui/material";
import {FOOTER_COPYRIGHT, FOOTER_PAYMENTS} from "@constants/footer";

const FooterBottom = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid',
      borderColor: 'gray.200',
      mt: 4,
      py: 3,
    }}>
      
      <Typography
        variant='body2'
        sx={{ color: 'grey.600' }}
      >
        {FOOTER_COPYRIGHT}
      </Typography>
      
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}>
        {FOOTER_PAYMENTS.map((payment) => (
          <Box
            key={payment.name}
            component='img'
            src={payment.icon}
            alt={payment.name}
            sx={{
              height: 30,
              width: 46,
              objectFit: 'contain',
              bgcolor: 'white',
              borderRadius: 1,
              p: 0.5,
            }}
          >
          
          </Box>
          
        ))}
      </Box>
      
    </Box>
  );
};

export default FooterBottom;