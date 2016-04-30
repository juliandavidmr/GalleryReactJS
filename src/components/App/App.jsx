import React, {Component} from "react";
import s from "./App.scss"

import Gallery from "../Gallery/GalleryComponent.jsx"

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Gallery items={this.props.galleryItems} />;
  }
}

export default App;