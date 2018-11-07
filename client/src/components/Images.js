import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddImageButton from './AddImageButton';
import Image from './Image';


class ImageBar extends Component {
  renderImages() {
    const { images } = this.props;
    if (images.images.length !== 0) {
      return images.images.map(item => (
        <Image
          src={`data:image/png;base64,${item.imageInBase64}`}
          imageName={item.imageName}
          key={item.imageName}
        />));
    }
    return null;
  }


  render() {
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <AddImageButton />
        {this.renderImages()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    images: state.images,
  };
}


export default connect(mapStateToProps)(ImageBar);
