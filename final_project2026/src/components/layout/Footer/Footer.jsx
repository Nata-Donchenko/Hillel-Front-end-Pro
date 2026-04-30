import {Box, Container} from "@mui/material";
import FooterNews from "./components/FooterNews";
import FooterBrand from './components/FooterBrand'
import FooterLinks from "./components/FooterLinks";
import FooterBottom from "./components/FooterBottom.jsx";


const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#F0F0F0',
        py: 4,
      }}
    >
      <Container>
        
        <FooterNews />
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '113.5px',
          mt: 6
        }}>
          <FooterBrand />
          <FooterLinks />
        </Box>
        
        <FooterBottom />
        
      </Container>
    </Box>
  );
};

export default Footer;