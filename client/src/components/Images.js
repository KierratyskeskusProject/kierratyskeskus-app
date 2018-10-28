import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';

import { fetchImage } from '../redux/actions';
import Image from './Image';


class ImageBar extends Component {
  renderImages() {
    const { images } = this.props;
    if (images.images.length !== 0) {
      images.images.map(item => <Image src={item.imageInBase64} />);
    }
  }


  render() {
    const { fetch, images } = this.props;
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton
          action={() => fetch()}
        />
        {images.images.map(item => (
          <Image
            src={`data:image/png;base64,${item.imageInBase64}`}
            imageName={item.imageName}
            key={item.imageName}
          />
        ))}

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
