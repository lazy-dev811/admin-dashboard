export const UPDATE_WIDGET_CONFIG = 'UPDATE_WIDGET_CONFIG';


export const updateWidgetConfig = (widgetConfig) => {
  console.log('MOTHERFUCKER YES', widgetConfig);
  return ({
    type: UPDATE_WIDGET_CONFIG,
    widgetConfig,
  });
};
