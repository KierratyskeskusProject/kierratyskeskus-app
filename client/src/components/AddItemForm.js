import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import Fields from './Fields';
import InputComponent from './InputComponent';
// import insertProduct from '../api/insertProduct';
import { postForm } from '../redux/actions/index';

class AddItemForm extends Component {
  Submit(values) {
    postForm(values);
<<<<<<< HEAD
    console.log(values);
=======
>>>>>>> e2b2fb4e3e6093c4f423a5ec1eacee677f2232a0
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
        <form onSubmit={handleSubmit(this.Submit.bind(this))}>
          {this.renderFields()}
          <button type="submit">Sumbit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(
  connect(null, { postForm })(AddItemForm),
);
