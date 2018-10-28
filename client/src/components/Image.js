import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './deleteButton';
import { deleteImage } from '../redux/actions';


class Image extends Component {
  render() {
    const { deleteOneImage, imageName, src } = this.props;
    console.log("Image componet this.props", this.props)
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


/*function mapStateToProps(state) {
  return {
    images: state.images,
  };
}*/

const mapStateToProps = state => ({
  imageName: state.images.images.length === 0 ? '' : state.images.images[0].imageName,
});



export default connect(mapStateToProps, { deleteOneImage: deleteImage })(Image);
