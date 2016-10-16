export const COLOR_PICKER_SELECT_COLOR = 'COLOR_PICKER_SELECT_COLOR';

export const colorPickerSelectColor = selectedColorName => ({
  type: COLOR_PICKER_SELECT_COLOR,
  selectedColorName,
});
