import { SET_USER } from '../actions/actions_types';

const initialState = {
  user: {
    name: '',
    surname: '',
    email: ''
  },
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:

      return {
        ...state,
        user: {
          name: action.payload.name,
          surname: action.payload.surname,
          email: action.payload.email
        },
        isLoggedIn: !state.isLoggedIn
      };


    default:
      return state;
  }
};
