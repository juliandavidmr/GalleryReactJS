/**
 * Created by julian on 30/04/16.
 */
import React, {Component} from "react";
import s from "./GalleryItem.scss";

class GalleryItem extends Component {

  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  static defaultProps = {
    title: 'Camara',
    subtitle: 'Lorem camar',
    image: "https://cloud.githubusercontent.com/assets/4352286/11920432/f0aaff34-a76f-11e5-8456-a5d78b089233.jpg"
  };

  state = {
    hovering: false,
    liked: this.props.liked || false,
    counts: (Math.round(Math.random() * 20) + 4)
  };

  handleIncrement() {
    if (this.state.liked) return;
    this.setState({
      liked: true,
      counts: this.state.counts + 1
    })
  }

  handleMouseEnter() {
    this.setState({
      hovering: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hovering: false
    })
  }

  icons() {
    return (
      <div className="overlay">
        <span className="glyphicon glyphicon-zoom-in">
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail">
          <div
            className="image-preview"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>

            <a className="gallery" href={this.props.image} title={this.props.title}>
              {this.state.hovering ? this.icons() : null}
              <img src={this.props.image} alt={this.props.title}/>
            </a>
          </div>
          <div className="caption text-center">
            <h4>{this.props.title}</h4>
            <h5>{this.props.subtitle}</h5>
            <a className={"btn btn-primary" + (this.state.liked ? " liked" : "")} onClick={this.handleIncrement}>
              <span className="glyphicon glyphicon-heart"></span> {this.state.counts}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryItem;