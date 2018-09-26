import React, { Component } from 'react';
import ImageButton from './AddImageButton';

class ImageBar extends Component {
  render() {
    return (
        <div className="imageBar">
            {/* Images added to new item appear here, as well as Add Image button. */}
            <ImageButton />
        </div>
    );
  }
}

export default ImageBar;