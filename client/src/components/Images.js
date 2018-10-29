import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';

import { fetchImage } from '../redux/actions';
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
    const { fetch } = this.props;
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton action={() => fetch()} />
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


export default connect(mapStateToProps,
  { fetch: fetchImage })(ImageBar);
