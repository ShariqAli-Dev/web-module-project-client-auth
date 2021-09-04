import { FRIEND_FORM_CHANGE, POSTED_FRIEND } from '../actions';

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
    case POSTED_FRIEND:
      return {
        ...state,
        friends: action.payload,
      };
    default:
      return state;
  }
};
