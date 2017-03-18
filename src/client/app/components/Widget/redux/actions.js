export const UPDATE_WIDGET_CONFIG = 'UPDATE_WIDGET_CONFIG';

export const updateWidgetConfig = (widgetName, widgetConfig) => {

  // console.log('widgetName, widgetConfig', widgetName, widgetConfig)
  return ({
    type: UPDATE_WIDGET_CONFIG,
    widgetName,
    widgetConfig,
  });
};
