import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { fetchImage } from '../redux/actions';

export class CaptureModal extends Component {
  static propTypes = {
    isModalActive: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

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
      fetch,
    } = this.props;
    return (
      <div
        id="camera__modal"
        className={isModalActive
          ? 'camera__modal'
          : 'camera__modal camera__modal--hidden'}
      >
        <div className="modal__content">
          <div className="modal__screen">
            <Webcam />
          </div>
          <button
            className={loading
              ? 'lds-dual-ring'
              : 'btn capture'}
            type="submit"
            onClick={() => fetch()}
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
});

export default connect(
  mapStateToProps,
  { fetch: fetchImage },
)(CaptureModal);
