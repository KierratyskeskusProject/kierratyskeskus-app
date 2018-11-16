import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { fetchImage, fetchWeight } from '../redux/actions';

export class CaptureModal extends Component {
  static propTypes = {
    isModalActive: PropTypes.bool.isRequired,
    handleModalToggle: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    document.getElementById('trunk')
      .appendChild(
        document.getElementById(
          'camera__modal',
        ),
      );
  }

  render() {
    const {
      isModalActive,
      loading,
      image,
      weight,
      handleModalToggle,
    } = this.props;
    return (
      <div
        id="camera__modal"
        className={isModalActive
          ? 'camera__modal'
          : 'camera__modal camera__modal--hidden'}
      >
        <div className="modal__content">
          <button className="btn modal__close" type="button" onClick={() => handleModalToggle()}>
            <i className="fa fa-times fa-times-modal" />
          </button>
          <Webcam />
          <button
            className={loading
              ? 'capture__loading'
              : 'btn capture'}
            type="submit"
            onClick={() => [weight(), image()]}
            disabled={loading}
          >
            {loading ? '' : <i className="fa fa-camera fa-camera-modal" />}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.images.loading,
  weight: state.weight,
});

export default connect(
  mapStateToProps,
  { image: fetchImage, weight: fetchWeight },
)(CaptureModal);
