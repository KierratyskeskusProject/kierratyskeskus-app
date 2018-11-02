import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import Fields from './Fields';
import InputComponent from './InputComponent';
import { postForm } from '../redux/actions/index';
import ImageBar from './Images';
import DescriptionField from './DescriptionField';

import validate from './Validation';

class AddItemForm extends Component {
  Submit(values) {
    postForm(values);
  }

  renderInputFields() {
    const inputFields = _.differenceWith(Fields, [{ label: 'Product Description', name: 'description' }], _.isEqual);

    return _.map(inputFields, ({ label, name }) => (
      <Field key={name} component={InputComponent} type="text" label={label} name={name} />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.Submit.bind(this))} autoComplete="off">
          <ImageBar />
          {this.renderInputFields()}
          <Field key="description" name="description" component={DescriptionField} />
          <button className="btn btn-success submit" type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate,
})(
  connect(
    null,
    { postForm },
  )(AddItemForm),
);
