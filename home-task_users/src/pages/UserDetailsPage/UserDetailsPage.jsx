import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const UserDetailsPage = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const user = users.find((u) => u.id === Number(id));
  
  if (!user) return <div>Loading...</div>;
  
  return (
    <Container className="mt-4">
      <Card className="p-3 shadow-sm">
        
        <h3>{user.name}</h3>
        
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        
        <p><strong>City:</strong> {user.address?.city}</p>
        <p><strong>Street:</strong> {user.address?.street}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        
        <Button className="mt-3" onClick={() => navigate("/users")}>
          Back to List
        </Button>
      
      </Card>
    </Container>
  );
};

UserDetailsPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      website: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
        street: PropTypes.string,
      }),
      company: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default UserDetailsPage;