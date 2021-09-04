import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const ON_CHANGE = 'ON_CHANGE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';

export const GRAB_FRIENDS = 'GRAB_FRIENDS';
export const FRIEND_FORM_CHANGE = 'FRIEND_FORM_CHANGE';
export const POST_FRIEND = 'POST_FRIEND';
export const POSTED_FRIEND = 'POSTED_FRIEND';

export const onChange = (event) => {
  return { type: ON_CHANGE, payload: event };
};

export const loginUser = (userParams) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/login', userParams)
    .then((res) => {
      dispatch(loggedInUser(res.data.payload));
    })
    .catch((err) => console.log(err));
};

export const loggedInUser = (token) => {
  localStorage.setItem('token', token);
};

export const grabFriends = () => (dispatch) => {
  axiosWithAuth()
    .get('friends')
    .then((res) => {
      dispatch(postedFriend(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const friendFormChange = (event) => {
  return { type: FRIEND_FORM_CHANGE, payload: event };
};

export const postFriend = (userParams) => (dispatch) => {
  axiosWithAuth()
    .post('/friends', userParams)
    .then((res) => {
      dispatch(postedFriend(res.data));
    })
    .catch((err) => {
      alert('Call has failed');
      console.log(err);
    });
};

export const postedFriend = (friendData) => {
  return { type: POSTED_FRIEND, payload: friendData };
};
