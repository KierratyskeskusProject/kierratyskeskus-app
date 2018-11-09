import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { fetchImage } from '../redux/actions';
import './loading.css';

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
    const { fetch, loading } = this.props;
    return (
      <Fragment>
        <button
          className="btn addImage"
          type="button"
          onClick={handleModalToggle}
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
        <div className={isModalActive
          ? 'camera__modal'
          : 'camera__modal camera__modal--hidden'}
        >
          <div className="camera__modal__content">
            <Webcam />
            <button
              className={loading
                ? 'lds-dual-ring'
                : 'btn capture'}
              type="submit"
              onClick={() => fetch()}
              disabled={loading}
            >
              {loading ? '' : <i className="fa fa-camera fa-camera-modal" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.images.loading,
});

export default connect(mapStateToProps, { fetch: fetchImage })(ImageButton);
