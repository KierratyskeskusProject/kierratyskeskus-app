import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';

import Fields from './Fields';
import InputComponent from './InputComponent';
import { postForm } from '../redux/actions/index';
import ImageBar from './Images';
import validate from './Validation';

class AddItemForm extends Component {
  onSubmit(values) {
    const { weight } = this.props;
    const newValues = Object.assign({}, values);

    newValues.weight = weight.weight.value;
    console.log(newValues);
    postForm(newValues);
  }

  renderInputFields() {
    const { weight } = this.props;
    return _.map(Fields, ({ label, name }) => (
      <Field
        key={name}
        component={InputComponent}
        type="text"
        label={label}
        name={name}
        actualValue={name === 'weight' ? weight.weight.value : ''}
      />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} autoComplete="off">
          <ImageBar />
          {this.renderInputFields()}
          <button className="btn btn-success submit" type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weight: state.weight };
}

export default reduxForm({
  form: 'simple',
  validate,
})(
  connect(
    mapStateToProps,
    { postForm },
  )(AddItemForm),
);
