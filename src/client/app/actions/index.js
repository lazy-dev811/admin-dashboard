export const BUTTON_CLICKED = 'BUTTON_CLICKED';
export const ADD_USER = 'ADD_USER';

export const buttonClicked = () => ({
  type: BUTTON_CLICKED
});

export const addUser = (user) => ({
  type: ADD_USER,
  user: user
});
