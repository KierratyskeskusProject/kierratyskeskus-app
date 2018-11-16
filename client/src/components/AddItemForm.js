import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';

import Fields from './Fields';
import InputComponent from './InputComponent';
import { postForm } from '../redux/actions/index';
import ImageBar from './Images';
import validate from './Validation';
import CategoryTree from './CategoryTree';
import CategoryReactSelect, { scaryAnimals } from './CategoryReactSelect';

class AddItemForm extends Component {
  onSubmit(values) {
    const { weight } = this.props;
    const newValues = Object.assign({}, values);

    newValues.weight = weight.weight.value;

    values.category.map((item, key) => {
      newValues.category[key] = item.value;
      return null;
    });
    postForm(newValues);
  }

  renderInputFields() {
    const { weight } = this.props;
    return _.map(Fields, ({ label, name }) => (
      <Field
        key={name}
        multi={name === 'category' ? true : ''}
        options={name === 'category' ? scaryAnimals : ''}
        component={name === 'category' ? CategoryReactSelect : InputComponent}
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
          <div className="row">
            <div className="col-6 formFrame">
              {this.renderInputFields()}
              <button className="btn btn-success submit" type="submit">Add Item</button>
            </div>
            <div className="col-6 categoryTreeFrame">
              <CategoryTree />
            </div>
          </div>
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
