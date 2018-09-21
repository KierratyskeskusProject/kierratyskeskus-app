import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Fields from './Fields';
import InputComponent from './InputComponent';
import validate from './Validation';

class AddItemForm extends Component {
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
        <form onSubmit={handleSubmit} autoComplete="off">
          {this.renderFields()}
          <Field
            key="description"
            name="description"
            component={this.renderDescriptionField}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'simple',
})(AddItemForm);
