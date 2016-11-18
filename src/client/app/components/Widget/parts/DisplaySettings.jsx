import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';
import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';

const DisplaySettings = ({
  onSettingsUpdate,
  widgetName,
  header,
  body,
  footer,
  transparentBg,
  transparentScrollbar,
}) => {
  const transparencyConfigs = [
    {
      label: 'Transparent background',
      key: 'transparentBg',
      value: transparentBg,
    },
    {
      label: 'Transparent scrollbar',
      key: 'transparentScrollbar',
      value: transparentScrollbar,
    },
  ];
  const componentConfigs = [
    {
      label: 'Header',
      key: 'header',
      category: 'components',
      value: header,
    },
    {
      label: 'Body',
      key: 'body',
      category: 'components',
      value: body,
    },
    {
      label: 'Footer',
      key: 'footer',
      category: 'components',
      value: footer,
    },
  ];

  return (
    <div className="widget__settings">
      <div className="widget__settings__toggle">
        <div className="widget__settings__toggle__middle" />
      </div>

      <form className="sdsdsds">
        <ul className="widget__settings__list">
          {
            transparencyConfigs.map(setting => (
              <li className="widget__settings__list__item" key={setting.label}>
                <Field
                  name={setting.label}
                  component={FormFieldText}
                  id={setting.label}
                  placeholder={setting.label}
                  type="text"
                  onChange={() => onSettingsUpdate(widgetName, setting)}
                />
              </li>
            ))
          }
        </ul>

        <ul className="widget__settings__list">
          {
            componentConfigs.map(setting => (
              <li className="widget__settings__list__item" key={setting.label}>
                <Field
                  name={setting.label}
                  component={FormFieldCheckbox}
                  id={setting.label}
                  label={setting.label}
                  onChange={() => onSettingsUpdate(widgetName, setting)}
                />
              </li>
            ))
          }
        </ul>
      </form>
    </div>
  );
};

DisplaySettings.propTypes = {
  onSettingsUpdate: PropTypes.func,
  widgetName: PropTypes.string,
  header: PropTypes.bool,
  body: PropTypes.bool,
  footer: PropTypes.bool,
  transparentBg: PropTypes.bool,
  transparentScrollbar: PropTypes.bool,
};

export default {
  form: reduxForm({
    form: 'DisplaySettings',
  })(DisplaySettings),
};
