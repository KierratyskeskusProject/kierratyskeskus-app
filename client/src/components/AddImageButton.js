import React, { Component } from 'react';

class ImageButton extends Component {
  render() {
    return (
        <button className="btn addImage" type="button">
            <i className="fa fa-camera" aria-hidden="true"></i>
        </button>
    );
  }
}

export default ImageButton;
