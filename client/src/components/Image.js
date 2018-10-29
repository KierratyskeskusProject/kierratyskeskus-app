import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import { deleteImage } from '../redux/actions';


class Image extends Component {
  render() {
    const { deleteOneImage, imageName, src } = this.props;
    console.log('Image componet this.props', this.props);
    return (
      <div className="newImage">
        <img src={src} alt="Loading unsuccessful" className="image" />
        <DeleteButton
          action={() => deleteOneImage(imageName)}
        />
      </div>
    );
  }
}


export default connect(null, { deleteOneImage: deleteImage })(Image);
