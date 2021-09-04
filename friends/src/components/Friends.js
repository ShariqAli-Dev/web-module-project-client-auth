import React from 'react';
import { connect } from 'react-redux';
import { friendFormChange } from '../actions';

const Friends = (props) => {
  // state
  const { name, age, email } = props.formValues;
  // functions
  const { friendFormChange } = props;

  return (
    <div>
      <div>
        <p>Add Friend</p>
        {/* add the onchange */}
        <form>
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
        {/* grab and render friends from redux props */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.friendsReducer.formValues,
  };
};

export default connect(mapStateToProps, { friendFormChange })(Friends);
