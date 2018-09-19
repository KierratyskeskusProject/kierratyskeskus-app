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
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          {this.renderFields()}
          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(AddItemForm);
