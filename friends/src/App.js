import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <>
      <div>
        <h1>This is the app component</h1>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, {})(App);
