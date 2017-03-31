export const ADD_TOAST = 'ADD_TOAST';
export const BURN_TOAST = 'BURN_TOAST';

export const addToast = toast => ({
  type: ADD_TOAST,
  toast,
});

export const burnToast = toastIndex => ({
  type: BURN_TOAST,
  toastIndex,
});
