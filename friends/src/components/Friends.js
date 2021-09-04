import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { friendFormChange, grabFriends, postFriend } from '../actions';
import Friend from '../components/Friend';

const Friends = (props) => {
  // state
  const { friends, formValues } = props;
  const { name, age, email } = formValues;

  // functions
  const { friendFormChange, grabFriends, postFriend } = props;

  useEffect(() => {
    grabFriends();
  }, []);

  return (
    <div>
      <div>
        <p>Add Friend</p>

        <form
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              await postFriend({ name, age, email });
            } catch (error) {
              alert(error.message);
              console.log(error);
            }
          }}
        >
          <input
            value={name}
            id='name'
            name='name'
            placeholder='Name'
            onChange={friendFormChange}
          />
          <input
            value={email}
            id='email'
            name='email'
            placeholder='Email'
            onChange={friendFormChange}
          />
          <input
            value={age}
            id='age'
            name='age'
            placeholder='Age'
            onChange={friendFormChange}
          />
          <button type='submit'>Add Friend</button>
        </form>
      </div>
      <div>
        <h1>Friends</h1>
        {friends.map((friend) => {
          return <Friend keyy={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends,
    formValues: state.friendsReducer.formValues,
  };
};

export default connect(mapStateToProps, {
  friendFormChange,
  grabFriends,
  postFriend,
})(Friends);
