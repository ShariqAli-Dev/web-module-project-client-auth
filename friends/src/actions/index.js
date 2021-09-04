import axios from 'axios';

export const POST_FRIEND = 'POST_FRIEND';
export const POSTED_FRIEND = 'POSTED_FRIEND';

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
