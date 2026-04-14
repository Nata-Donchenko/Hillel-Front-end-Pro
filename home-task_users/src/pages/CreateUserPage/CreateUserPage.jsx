import { useNavigate } from "react-router-dom";
import UserForm from "../../components/UserForm";
import initialValues from "../../components/UserForm/initialValues.js";
import PropTypes from "prop-types";

const CreateUserPage = ({ createUser }) => {
  const navigate = useNavigate();
  
  const handleSubmit = (values) => {
    createUser(values);
    navigate("/users");
  };
  
  return (
    <div>
      <h2>Create User</h2>
      
      <UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

CreateUserPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default CreateUserPage;