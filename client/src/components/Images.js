import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';
import { fetchImage, deleteImage } from '../redux/actions';


class ImageBar extends Component {
  render() {
    const { fetch, realdelete, imageName } = this.props;
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton
          action={() => fetch()}
        />
        <button
          onClick={() => realdelete(imageName)}
        >
        delete
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('STATATW', state);

  return {

    imageName: state.images.images.length === 0 ? '' : state.images.images[0].imageName,
  };
};

export default connect(mapStateToProps, { fetch: fetchImage, realdelete: deleteImage })(ImageBar);
