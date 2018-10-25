import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';
import { fetchImage, deleteImage } from '../redux/actions';


class ImageBar extends Component {
  render() {
    const { fetch, deleteOneImage, imageName } = this.props;
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton
          action={() => fetch()}
        />
        <button
          type="submit"
          onClick={() => deleteOneImage(imageName)}
        >
                    delete
        </button>
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
