import { connect } from "react-redux";
import Main from "./components/Main";
import { bindActionCreators } from "redux";
import * as actions from "./store/actions";

function mapStateToProps(state) {
  console.log("APP STATE", state);
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
