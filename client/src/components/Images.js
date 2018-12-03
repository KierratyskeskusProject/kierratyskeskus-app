import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddImageButton from './AddImageButton';
import Image from './Image';


class ImageBar extends Component {
  ifBook = (images) => {
    let aBook;
    images.map((item) => {
      if (item.book !== null) {
        aBook = {
          title: item.book.title,
          authors: [...item.book.authors],
          description: item.book.description,
          pageCount: item.book.pageCount,
          publisher: item.book.publisher,
          publishedDate: item.book.publishedDate,
        };
      }
      return console.log('no books');
    });
    return aBook;
  }

  renderImages() {
    const { images } = this.props;
    if (images.images.length !== 0) {
      const bookData = this.ifBook(images.images);
      console.log('render image func', bookData);

      return images.images.map(item => (
        <Image
          src={`data:image/png;base64,${item.imageInBase64}`}
          imageName={item.imageName}
          key={item.imageName}
        />));
    }
    return null;
  }

  render() {
    return (
      <div className="imageBar">
        {/* Images added to new item appear here, as well as Add Image button. */}
        <AddImageButton />
        {this.renderImages()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    images: state.images,
    book: state.book,
  };
}


export default connect(mapStateToProps)(ImageBar);
