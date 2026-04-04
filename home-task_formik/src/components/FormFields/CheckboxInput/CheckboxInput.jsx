import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ name, id, label, formik }) => {
  return (
    <div className='mb-3 form-check'>
      <input
        type='checkbox'
        name={name}
        id={id}
        className='form-check-input'
        checked={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <label htmlFor={id} className='form-check-label'>
        {label}
      </label>
      
    </div>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckboxInput;