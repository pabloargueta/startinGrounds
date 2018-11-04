import { rest } from './rest';
import { createStore } from 'redux';

const defaultState = {
  token: localStorage.token || '',
  profileQuestions: [],
  haveFetched: {}
};

function reducer(state = defaultState, action) {
  const { get, post } = rest(state.token);
  switch (action.type) {
    case 'SEARCH':
      return { ...state, state: 'YOUR STATE' };

    case 'SIGNUP_USER':
      post('/users', action.payload).then((user) => {
        console.log(user);
        // store.dispatch({
        //   type: '',
        //   payload: user
        // })
      });
      return state;

    case 'AUTHENTICATE_USER':
      post('/login', action.payload).then((auth) => {
        store.dispatch({
          type: 'LOGIN_USER',
          payload: auth
        });
      });
      return state;

    case 'LOGIN_USER':
      localStorage.setItem('token', action.payload.jwt);
      return { ...state, token: action.payload.jwt };

    case 'LOGOUT_USER':
      localStorage.clear();
      return { ...state, token: '' };

    case 'FETCH_PROFILE_QUESTIONS':
      get('/profile_questions').then((profile_questions) => {
        store.dispatch({
          type: 'RECIEVE_PROFILE_QUESTIONS',
          payload: profile_questions
        });
      });
      return state;

    case 'RECIEVE_PROFILE_QUESTIONS':
      return { ...state, profileQuestions: action.payload };

    default:
      return state;
    // break;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
