import { rest } from './rest';
import { createStore } from 'redux';

const defaultState = {
  token: localStorage.token != 'undefined' ? localStorage.token : '',
  profileAnswers: [],
  preferences: [],
  currentUser: { matches: [] },
};

let first = true
function reducer(state = defaultState, action) {
  const { get, post, patch } = rest(state.token);

  if (state.token && first) {
    first = false
    get(`/users/me`)
      .then(user => {
        store.dispatch({
          type: 'RECEIVE_USER',
          payload: user
        })
      })
  }


  switch (action.type) {
    case 'SEARCH':
      return { ...state, state: 'YOUR STATE' };

    case 'CREATE_USER':
      post('/users', action.payload).then((user) => {
        window.location = '/login'
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
      let token = action.payload.jwt
      localStorage.setItem('token', token);
      return {
        ...state,
        token: token
      };

    case 'LOGOUT_USER':
      localStorage.clear();
      return { ...state, token: '' };

    case 'FETCH_PROFILE_ANSWERS':
      get('/profile_answers').then((profile_questions) => {
        store.dispatch({
          type: 'RECEIVE_PROFILE_ANSWERS',
          payload: profile_questions
        });
      });
      return state;

    case 'RECEIVE_PROFILE_ANSWERS':
      return { ...state, profileAnswers: action.payload };

    case 'UPDATE_PROFILE_ANSWER':
      let newProfileAnswers = [...state.profileAnswers]
      var index = newProfileAnswers.findIndex(answer => answer.id == action.payload.id)
      newProfileAnswers[index] = { ...newProfileAnswers[index], ...action.payload }
      patch(`/profile_answers/${action.payload.id}`, action.payload)
      return { ...state, profileAnswers: newProfileAnswers }


    case 'FETCH_PREFERENCES':
      get('/preferences').then((preferences) => {
        store.dispatch({
          type: 'RECEIVE_PREFERENCE',
          payload: preferences
        });
      });
      return state;


    case 'RECEIVE_USER':
      return { ...state, currentUser: action.payload };


    case 'RECEIVE_PREFERENCE':
      return { ...state, preferences: action.payload };

    case 'UPDATE_PREFERENCE':
      let newPreferences = [...state.preferences]
      var index = newPreferences.findIndex(answer => answer.id == action.payload.id)
      newPreferences[index] = { ...newPreferences[index], ...action.payload }
      patch(`/preferences/${action.payload.id}`, action.payload)
      return { ...state, preferences: newPreferences }


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
