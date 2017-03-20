import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import FormField from '../../FormElements/FormField/FormField.jsx';

require('./DisplaySettings.scss');

const GreetForm = ({
  handleChange,
  onSettingsSubmit,
  widgetName,
  top,
  right,
  bottom,
  left,
  header,
  body,
  footer,
  transparentBg,
  transparentScrollbar,
}) => {
  const positionConfig = [
    {
      label: 'Top',
      key: 'top',
      category: 'position',
      value: top,
    },
    {
      label: 'Right',
      key: 'right',
      category: 'position',
      value: right,
    },
    {
      label: 'Bottom',
      key: 'bottom',
      category: 'position',
      value: bottom,
    },
    {
      label: 'Left',
      key: 'left',
      category: 'position',
      value: left,
    },
  ];
  const transparencyConfig = [
    {
      label: 'Background',
      key: 'transparentBg',
      value: transparentBg,
    },
    {
      label: 'Scrollbar',
      key: 'transparentScrollbar',
      value: transparentScrollbar,
    },
  ];
  const componentConfig = [
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

  const convertValue = (name, setting, event, type) => {
    const updatedSetting = Object.assign(setting, {});
    if (type !== 'bool') {
      const typeConverter = type === 'text' ? String : Number;
      updatedSetting.value = typeConverter(event.target.value);
    } else {
      updatedSetting.value = event.target.value === 'false' || event.target.value === ''; // toggling bool here too
    }
    return handleChange(name, updatedSetting);
  };

  return (
    <div className="widget__settings">
      <div className="widget__settings__toggle">
        <div className="widget__settings__toggle__middle" />
      </div>

      <form className="widget__settings__form" onSubmit={() => onSettingsSubmit}>
        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Position</div>
            {
              positionConfig.map((setting) => {
                return (
                  <div className="widget__settings__category__item" key={setting.label}>
                    <Field
                      type="number"
                      name={setting.key}
                      component={FormField}
                      id={`${widgetName}-${setting.label}`}
                      label={setting.label}
                      onChange={event => convertValue(widgetName, setting, event, 'number')}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Transparency</div>
            {
              transparencyConfig.map(setting => (
                <div className="widget__settings__category__item" key={setting.label}>
                  <Field
                    name={setting.key}
                    component={FormFieldCheckbox}
                    id={`${widgetName}-${setting.label}`}
                    label={setting.label}
                    type="checkbox"
                    onChange={event => convertValue(widgetName, setting, event, 'bool')}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Components</div>
            {
              componentConfig.map(setting => (
                <div className="widget__settings__category__item" key={setting.label}>
                  <Field
                    name={setting.key}
                    component={FormFieldCheckbox}
                    id={`${widgetName}-${setting.label}`}
                    label={setting.label}
                    type="checkbox"
                    onChange={event => convertValue(widgetName, setting, event, 'bool')}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </form>
    </div>
  );
};

GreetForm.propTypes = {
  handleChange: PropTypes.func,
  onSettingsSubmit: PropTypes.func,
  widgetName: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  header: PropTypes.bool,
  body: PropTypes.bool,
  footer: PropTypes.bool,
  transparentBg: PropTypes.bool,
  transparentScrollbar: PropTypes.bool,
};

export default {
  form: reduxForm({
    form: 'GreetForm',
  })(GreetForm),
};
