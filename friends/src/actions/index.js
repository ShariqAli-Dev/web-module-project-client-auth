import axios from 'axios';

export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const POST_FRIEND = 'POST_FRIEND';
export const POSTED_FRIEND = 'POSTED_FRIEND';

export const onChange = (event) => {
  return { type: ON_CHANGE, payload: event };
};

export const onSubmit = () => {
  return { type: ON_SUBMIT };
};

export const postFriend = () => (dispatch) => {
  axios
    .post('')
    .then((res) => {
      console.log(res);
      dispatch(postedFriend(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postedFriend = (friendData) => {
  return { type: POSTED_FRIEND, payload: friendData };
};
