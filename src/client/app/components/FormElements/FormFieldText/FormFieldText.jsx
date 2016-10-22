import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./FormFieldText.scss');

const FormFieldText = ({ input, type, placeholder, id, meta: { touched, error } }) => {
  const isError = touched && error;
  const fieldClass = classnames('field', { 'is-error': isError });

  return (
    <div className="field-container">
      <input
        {...input}
        className={fieldClass}
        type={type}
        placeholder={placeholder}
        id={id}
      />
      {
        isError &&
          <div className="field__error">{error}</div>
      }
    </div>
  );
};

FormFieldText.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
};

export default FormFieldText;
