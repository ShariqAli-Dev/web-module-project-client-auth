import { ON_CHANGE, ON_SUBMIT } from '../actions';

const initialState = {
  username: '',
  password: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: [action.payload.target.value],
      };

    default:
      return state;
  }
};
