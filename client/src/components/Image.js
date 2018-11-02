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
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
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
            <button className="btn closeModal" type="button" onClick={this.handleClose}>
              <i className="fa fa-times" />
            </button>
            <DeleteButton
              action={() => deleteOneImage(imageName)}
            />
            <img src={src} alt="Loading unsuccessful" className="fullscreen" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default connect(null, { deleteOneImage: deleteImage })(Image);
