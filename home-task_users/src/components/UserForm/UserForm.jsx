import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import FormInput from "../FormInput";
import userSchema from "./userSchema";
import PropTypes from "prop-types";

const UserForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit,
    enableReinitialize: true,
  });
  
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        
        <FormInput label="Name" name="name" formik={formik} />
        <FormInput label="Email" name="email" formik={formik} />
        <FormInput label="Phone" name="phone" formik={formik} />
        <FormInput label="Website" name="website" formik={formik} />
        <FormInput label="City" name="address.city" formik={formik} />
        <FormInput label="Street" name="address.street" formik={formik} />
        <FormInput label="Company Name" name="company.name" formik={formik} />
        
        <Button type="submit" className="mt-3">
          Save
        </Button>
      
      </Form>
    </Container>
  );
};

UserForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
    }),
    company: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;