import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import Webcam from 'react-webcam';

class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
    };
  }

  handleModalToggle = () => {
    const { isModalActive } = this.state;
    this.setState({
      isModalActive: !isModalActive,
    });
  }

  handleCapture() {
    const { action } = this.props;
    action();
  }

  render() {
    const { isModalActive } = this.state;
    const { handleModalToggle, handleCapture } = this;
    return (
      <Fragment>
        <button className="btn addImage" type="button" onClick={handleModalToggle}>
          <div className="camera__container">
            <div className="camera__actual">
              {!isModalActive ? (
                <Webcam height="200" />
              )
                : ''}
            </div>
          </div>
          <i className="fa fa-camera" aria-hidden="true" />
        </button>
        <Modal
          show={isModalActive}
          onHide={handleModalToggle}
          animation={false}
        >
          <Modal.Body>
            <Webcam />
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}
export default ImageButton;
