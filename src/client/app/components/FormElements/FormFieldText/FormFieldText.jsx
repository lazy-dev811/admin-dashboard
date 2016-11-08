import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./FormFieldText.scss');

const FormFieldText = ({ input, placeholder, id, meta: { touched, error }, onChange }) => {
  const isError = touched && error;
  const fieldClass = classnames('field', { 'is-error': isError });

  return (
    <div className="field-container">
      <input
        {...input}
        className={fieldClass}
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
          input.onChange(e.target.value);
        }}
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
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
  onChange: PropTypes.function,
};

export default FormFieldText;
