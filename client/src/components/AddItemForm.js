import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import Fields from './Fields';
import InputComponent from './InputComponent';
// import insertProduct from '../api/insertProduct';
import { postForm } from '../redux/actions/index';

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

  Submit(values) {
  this.props.postForm (values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.Submit.bind(this))}>
          {this.renderFields()}
          <button>Button</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(
  connect(null, { postForm })(AddItemForm)
);
