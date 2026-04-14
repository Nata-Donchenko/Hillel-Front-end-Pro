import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { getIn } from "formik";

const FormInput = ({ label, name, formik, type = "text" }) => {
  const value = getIn(formik.values, name) ?? "";
  const touched = getIn(formik.touched, name);
  const error = getIn(formik.errors, name);
  
  return(
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isInvalid={Boolean(touched && error)}
      />
      
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default FormInput;