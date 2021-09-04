import { connect } from 'react-redux';

function App(props) {
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
    friends: [],
  };
};

export default connect(mapStateToProps, {})(App);
