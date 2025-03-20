import { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import { posts } from "../data/posts";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={'PhotoWall'} />
        <PhotoWall posts={posts} />
      </div>
    );
  }
}

export default Main;
