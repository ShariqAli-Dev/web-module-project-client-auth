import { FRIEND_FORM_CHANGE } from '../actions';

const initialState = {
  friends: [],
  formValues: {
    id: undefined,
    name: '',
    age: undefined,
    email: '',
  },
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIEND_FORM_CHANGE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    default:
      return state;
  }
};
