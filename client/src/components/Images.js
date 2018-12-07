import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';
import { postForm } from '../redux/actions/index';
import AddImageButton from './AddImageButton';
import Image from './Image';
import getTemplateCategory from '../functions/getTempCat';

import { Categories } from '../data/Categories';

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
      return null;
    });
    return aBook;
  };

  renderImages() {
    const {
      dispatch, images, template, formFields,
    } = this.props;

    if (images.images.length !== 0) {
      const bookData = this.ifBook(images.images);
      console.log('render image func', bookData);
      const { category } = images.images[0];

      if (formFields.simple.values.content === 0) {
        const getTemp = getTemplateCategory(category, Categories, template);
        dispatch(change('simple', 'title', getTemp.title));
        dispatch(change('simple', 'description', getTemp.description));
        dispatch(change('simple', 'category', getTemp.category[0]));
        dispatch(change('simple', 'content', 1));
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

const Images = reduxForm({
  form: 'simple',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ImageBar);

const mapStateToProps = state => ({
  images: state.images,
  book: state.book,
  template: state.templates,
  postForm,
  formFields: state.form,
});

const mapDispatchToProps = () => ({
  postForm,
});


export default connect(mapStateToProps, mapDispatchToProps)(Images);
