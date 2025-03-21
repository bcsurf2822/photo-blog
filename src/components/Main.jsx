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
    console.log("MAIN", this.props);
    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title title="PhotoWall" />
          </Link>
        </div>

        <Routes>
          <Route exact path="/" element={<PhotoWall {...this.props.posts} />} />
          <Route path="/AddPhoto" element={<AddPhoto {...this.props} />} />
          <Route
            path="/single/:id"
            element={
              <Single
                posts={this.props.posts}
                comments={this.props.comments}
                addComment={this.props.addComment}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
export default connect(mapStateToProps)(Main);
