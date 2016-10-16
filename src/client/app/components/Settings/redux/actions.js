export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSettings = settingToUpdate => ({
  type: UPDATE_SETTINGS,
  settingToUpdate,
});
