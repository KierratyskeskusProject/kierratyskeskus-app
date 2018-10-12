import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';
import { fetchImage } from '../redux/actions';
import Image from './Image';

class ImageBar extends Component {
  renderImages() {
    const { images } = this.props;
    console.log(images);
    if (images.images.length !== 0) {
      console.log('Ei varmaan toimi');
      images.images.map(item => <Image src={item.imageInBase64} />);
    }
  }

  render() {
    const { fetch, images } = this.props;
    return (
      <div className="imageBar row">
        <ImageButton
          action={() => fetch()}
        />
        {images.images.map(item => <Image src={`data:image/png;base64,${item.imageInBase64}`} key={item.imageName} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

export default connect(mapStateToProps, { fetch: fetchImage })(ImageBar);
