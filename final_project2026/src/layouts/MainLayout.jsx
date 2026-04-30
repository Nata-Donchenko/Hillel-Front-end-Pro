import {Box, Container} from "@mui/material";
import AnnouncementBar from "@components/layout/AnnouncementBar";
import Navbar from "@components/layout/Navbar";
import {Outlet} from "react-router";
import Footer from "@components/layout/Footer";
import {CONTAINER_MAX_WIDTH} from "@constants/layout.js";

const MainLayout = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
    
    <AnnouncementBar />
    <Navbar />
      
      <Container sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
    
    <Footer />
    
    </Box>
    
  );
};

export default MainLayout;