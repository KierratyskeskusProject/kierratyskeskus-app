import React, { Component } from 'react';
import ImageButton from './AddImageButton';
import TakeImg from '../api/TakeImg';

class ImageBar extends Component {
  takeImage = async () => {
    const take = await TakeImg();
    console.log(take);
  }

  render() {
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton
          action={() => this.takeImage()}
        />
      </div>
    );
  }
}

export default ImageBar;
