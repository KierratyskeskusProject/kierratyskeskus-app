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
        <form onSubmit={handleSubmit(this.Submit.bind(this))} autoComplete="off">
          <ImageBar />
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
  form: 'simple',
  validate,
})(
  connect(null, { postForm })(AddItemForm),
);
