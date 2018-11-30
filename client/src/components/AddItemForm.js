import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';

import Fields from './Fields';
import InputComponent from './InputComponent';
import { postForm, fetchTemplates } from '../redux/actions/index';
import ImageBar from './Images';
import validate from './Validation';
import CategoryReactSelect, { categoryList } from './CategoryReactSelect';
import { load as loadData } from '../redux/reducers/initialDescReducer';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionRating: 0,
      isSmallResolution: null,
    };
  }

  componentDidMount() {
    const { getTemplates, dispatch, load } = this.props;
    const dataX = {
      description: '',
    };
    window.addEventListener('resize', () => {
      this.setState({
        isSmallResolution: window.innerWidth < 1000,
      });
    }, false);
    dispatch(getTemplates());
    load(dataX);
  }


  changeConditionRating = (newRating) => {
    this.setState({
      conditionRating: newRating,
    });
  };

  handleValueSubmit = async (values, dispatch) => {
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
    await postForm(newValues);
    dispatch(reset('simple'));
    this.setState({ conditionRating: 0 });
  };

  renderInputFields() {
    const { changeConditionRating } = this;
    const { conditionRating } = this.state;
    const { isSmallResolution } = this.state;
    const { weight } = this.props;


    return _.map(Fields, ({ label, name, inputClass }) => (
      <Field
        key={name}
        multi={name === 'category' ? true : ''}
        options={name === 'category' ? categoryList : ''}
        component={name === 'category' ? CategoryReactSelect : InputComponent}
        type="text"
        inputClass={inputClass}
        label={label}
        name={name}
        conditionRating={conditionRating}
        changeConditionRating={changeConditionRating}
        actualValue={name === 'weight' ? weight.weight.value : '0'}
        isSmallResolution={isSmallResolution}
      />
    ));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="trunk" id="trunk">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ weight: state.weight, templates: state.templates });

const mapDispatchToProps = () => ({
  postForm,
  getTemplates: fetchTemplates,
});

export default reduxForm({
  form: 'simple',
  validate,
})(
  connect(state => ({
    initialValues: state.initialDescReducer.data,
  }), { load: loadData },
  mapStateToProps,
  mapDispatchToProps)(AddItemForm),
);
