import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import { deleteImage } from '../redux/actions';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { deleteOneImage, imageName, src } = this.props;
    const { show } = this.state;
    return (
      <div className="imageFrame">
        <button className="btn newImage" type="button" onClick={this.handleShow}>
          <img src={src} alt="Loading unsuccessful" className="image" />
        </button>
        <DeleteButton
          action={() => deleteOneImage(imageName)}
        />
        <Modal show={show} onHide={this.handleClose} animation={false}>
          <Modal.Body>
            <img src={src} alt="Loading unsuccessful" className="fullscreen" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default connect(null, { deleteOneImage: deleteImage })(Image);
