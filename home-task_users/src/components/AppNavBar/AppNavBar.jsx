import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/users">
          Users Manager
        </Navbar.Brand>
        
        <Navbar.Toggle/>
        
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/users">
              Users
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/users/create">
              Create User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;