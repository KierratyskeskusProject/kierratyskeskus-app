import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageButton from './AddImageButton';
import { fetchImage } from '../redux/actions';

class ImageBar extends Component {
  render() {
    const { fetch } = this.props;
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <ImageButton
          action={() => fetch()}
        />
      </div>
    );
  }
}

export default connect(null, { fetch: fetchImage })(ImageBar);
