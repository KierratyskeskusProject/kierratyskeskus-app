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
    const { fetch, deleteOneImage, imageName } = this.props;
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

/*
ImageBar.defaultProps = {
  imageName: '',
};

ImageBar.propTypes = {
  fetch: PropTypes.func.isRequired,
  deleteOneImage: PropTypes.func.isRequired,
  imageName: PropTypes.string,
};
*/

const mapStateToProps = state => ({
  imageName: state.images.images.length === 0 ? '' : state.images.images[0].imageName,
});

export default connect(mapStateToProps,
  { fetch: fetchImage, deleteOneImage: deleteImage })(ImageBar);
