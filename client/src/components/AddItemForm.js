import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Fields from './Fields';
import InputComponent from './InputComponent';


class AddItemForm extends Component {
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
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(AddItemForm);
