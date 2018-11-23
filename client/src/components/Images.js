import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddImageButton from './AddImageButton';
import Image from './Image';
import { bookSuccess } from '../redux/types';


class ImageBar extends Component {
  renderImages() {
    const { images } = this.props;
    if (images.images.length !== 0) {
      if (images.images[0].book !== null) {
        const bookData = images.images[0].book;
        const { book } = this.props;
        const newBook = { ...book };
        newBook.title = bookData.title;
        newBook.description = bookData.description;
        newBook.pageCount = bookData.pageCount;
        newBook.publisher = bookData.publisher;
        newBook.publishedDate = bookData.publishedDate;
        newBook.authors = bookData.authors;
        console.log(newBook);
      }
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
const mapDispatchToProps = dispatch => ({
  bookDispatch: payload => dispatch(bookSuccess(payload)),
});

function mapStateToProps(state) {
  return {
    images: state.images,
    book: state.book,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageBar);
