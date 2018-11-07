import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { fetchImage } from '../redux/actions';
import './loading.css';

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
        <Modal
          show={isModalActive}
          onHide={handleModalToggle}
          animation={false}
          bsSize="lg"
        >
          <Modal.Body>
            <Webcam />
            <button
              className={loading ? 'lds-dual-ring' : 'capture'}
              type="submit"
              onClick={() => fetch()}
              disabled={loading}
            >
              {loading ? '' : 'Capture'}
            </button>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.images.loading,
});

export default connect(mapStateToProps, { fetch: fetchImage })(ImageButton);
