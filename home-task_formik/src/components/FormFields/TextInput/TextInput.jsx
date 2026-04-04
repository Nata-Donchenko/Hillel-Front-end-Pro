import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  label,
  id,
  placeholder,
  as = 'input',
  type = 'text',
  min,
  children,
  formik
}) => {
  
  const Component = as;
  
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className={`form-control ${
          formik.touched[name] && formik.errors[name] ? 'is-invalid' : ''
        }`}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={type}
        min={min}
      >
        {children}
      </input>
      
      {formik.touched[name] && formik.errors[name] && (
        <div className='invalid-feedback'>
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
  type: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
  }).isRequired,
};

export default TextInput;