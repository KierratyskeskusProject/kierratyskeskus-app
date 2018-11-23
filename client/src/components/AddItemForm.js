import React, { Component } from 'react';
import {
  Field, reduxForm, reset, initialize,
} from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';

import Fields from './Fields';
import InputComponent from './InputComponent';
import { postForm } from '../redux/actions/index';
import ImageBar from './Images';
import validate from './Validation';
import CategoryReactSelect, { categoryList } from './CategoryReactSelect';

class AddItemForm extends Component {
    state = { conditionRating: 0 };

  changeConditionRating = (newRating) => {
    this.setState({ conditionRating: newRating });
  };

  handleValueSubmit = (values, dispatch) => {
    const { conditionRating } = this.state;
    const { weight } = this.props;
    const newValues = {
      ...values,
      condition: conditionRating.toString(),
      weight: weight.weight.value,
    };
    values.category.map((item, key) => {
      newValues.category[key] = item.value;
      return null;
    });
    postForm(newValues);
    this.setState({ conditionRating: 0 });
    dispatch(reset('simple'));
  };

  renderInputFields() {
    const { changeConditionRating } = this;
    const { conditionRating } = this.state;
    const { weight } = this.props;

    return _.map(Fields, ({ label, name }) => (
      <Field
        key={name}
        multi={name === 'category' ? true : ''}
        options={name === 'category' ? categoryList : ''}
        component={name === 'category' ? CategoryReactSelect : InputComponent}
        type="text"
        label={label}
        name={name}
        conditionRating={conditionRating}
        changeConditionRating={changeConditionRating}
        actualValue={name === 'weight' ? weight.weight.value : '0'}
      />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.handleValueSubmit)}
        autoComplete="off"
      >
        <ImageBar />
        {this.renderInputFields()}
        <button
          className="btn btn-success submit"
          type="submit"
        >
          Add Item
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ weight: state.weight });

export default reduxForm({
  form: 'simple',
  validate,
})(
  connect(
    mapStateToProps,
    { postForm },
  )(AddItemForm),
);
