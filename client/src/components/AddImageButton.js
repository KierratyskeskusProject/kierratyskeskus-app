import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import Modal from './Modal';

export class ImageButton extends Component {
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

  render() {
    const { isModalActive } = this.state;
    const { handleModalToggle } = this;
    return (
      <React.Fragment>
        <button
          className="btn addImage"
          type="button"
          onClick={() => handleModalToggle()}
          disabled={isModalActive}
        >
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
        <Modal isModalActive={isModalActive} handleModalToggle={handleModalToggle} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.images.loading,
});

export default connect(
  mapStateToProps,
)(ImageButton);
