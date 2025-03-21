import { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Link, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Single from "./Single";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title title="PhotoWall" />
          </Link>
        </div>

        <Routes>
          <Route exact path="/" element={<PhotoWall {...this.props} />} />
          <Route path="/AddPhoto" element={<AddPhoto {...this.props} />} />
          <Route path="/single/:id" element={<Single {...this.props} />} />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state,
  };
}
export default connect(mapStateToProps)(Main);
