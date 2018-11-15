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
  constructor(props) {
    super(props);
    this.state = {
      conditionRating: 0,
    };
  }

  changeConditionRating = (newRating) => {
    this.setState({
      conditionRating: newRating,
    });
  }

  handleValueSubmit = (values) => {
    const { conditionRating } = this.state;
    const { weight } = this.props;
    const newValues = {
      ...values,
      condition: conditionRating.toString(),
      weight: weight.weight.value,
    };
    postForm(newValues);
  }

  renderInputFields() {
    const { changeConditionRating } = this;
    const { conditionRating } = this.state;
    const { weight } = this.props;

    const inputFields = _.differenceWith(
      Fields,
      [{
        label: 'Product Description',
        name: 'description',
      }],
      _.isEqual,
    );
    return _.map(inputFields, ({ label, name }) => (
      <Field
        key={name}
        component={InputComponent}
        type="text"
        label={label}
        name={name}
        conditionRating={conditionRating}
        changeConditionRating={changeConditionRating}
        actualValue={name === 'weight' ? weight.weight.value : ''}
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
        <Field
          key="description"
          name="description"
          component={DescriptionField}
        />
        <button
          className="btn btn-success submit"
          type="submit"
        >
Submit

        </button>
      </form>
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
