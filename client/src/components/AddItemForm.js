import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import Fields from './Fields';
import InputComponent from './InputComponent';
// import insertProduct from '../api/insertProduct';
import { postForm } from '../redux/actions/index';
import ImageBar from './Images';

import validate from './Validation';

class AddItemForm extends Component {
  Submit(values) {
    postForm(values);
  }

  renderDescriptionField(field) {
    return (
      <div className="form-group">
        <label>Product Description</label>
        <textarea className="form-control" rows="3" {...field.input} />
      </div>
    );
  }

  renderFields() {
    return _.map(Fields, ({ label, name }) => (
      <Field
        key={name}
        component={InputComponent}
        type="text"
        label={label}
        name={name}
      />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
<<<<<<< HEAD
        <form onSubmit={handleSubmit(this.Submit.bind(this))} autoComplete="off">
          <ImageBar />
=======
        <form onSubmit={handleSubmit} autoComplete="off">
>>>>>>> 8fe979aa71591e54f8a6e57195c31f49d3c90bf8
          {this.renderFields()}
          <Field
            key="description"
            name="description"
            component={this.renderDescriptionField}
          />
          <button className="btn btn-success submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'simple',
  validate,
})(
  connect(null, { postForm })(AddItemForm),
);
