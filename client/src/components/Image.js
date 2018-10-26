import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

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
    const { src } = this.props;
    const { show } = this.state;
    return (
      <div>
        <button className="btn newImage" type="button" onClick={this.handleShow}>
          <img src={src} alt="Loading unsuccessful" className="image" />
        </button>
        <Modal show={show} onHide={this.handleClose} animation={false}>
          <Modal.Body>
            <img src={src} alt="Loading unsuccessful" />
            <p>I am here</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Image;
