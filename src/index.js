import React, { Component } from "react";
import ReactDOM from "react-dom";
import YouTubeSearch from "youtube-api-search";
import SearchBar from "./component/searchbar";
import VideoList from "./component/videolist";
const API_KEY = 'AIzaSyCcXK8dEx2zLC1rb-cSKiaxlttEkIzysJk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YouTubeSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
