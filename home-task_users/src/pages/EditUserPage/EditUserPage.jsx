import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/UserForm";
import PropTypes from "prop-types";

const EditUserPage = ({ users, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rawUser = users.find((u) => u.id === Number(id));
  
  if (!rawUser) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    name: rawUser.name || "",
    email: rawUser.email || "",
    phone: rawUser.phone || "",
    website: rawUser.website || "",
    
    address: {
      city: rawUser.address?.city || "",
      street: rawUser.address?.street || "",
    },
    
    company: {
      name: rawUser.company?.name || "",
    },
  };
  
  const handleSubmit = (values) => {
    updateUser(Number(id), values);
    navigate("/users");
  };
  
  return (
    <div>
      <h2>Edit User</h2>
      
      <UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

EditUserPage.propTypes = {
  users: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default EditUserPage;