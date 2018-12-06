import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fields from './Fields';
import InputComponent from './InputComponent';
import {
  postForm, fetchTemplates, clearImages, clearWeight,
} from '../redux/actions/index';
import ImageBar from './Images';
import validate from './Validation';
import { Categories } from '../data';
import CategoryReactSelect from './CategoryReactSelect';
import { clear as clearData } from '../redux/reducers/initialDescReducer';

class AddItemForm extends Component {
  state = { conditionRating: 0, isSmallResolution: null };

  componentDidMount() {
    const { getTemplates, dispatch } = this.props;

    window.addEventListener('resize', () => {
      this.setState({
        isSmallResolution: window.innerWidth < 1000,
      });
    }, false);
    dispatch(getTemplates());
  }

  notify = () => toast.success('Item added successfully', {
    position: toast.POSITION.TOP_CENTER,
  });

  changeConditionRating = (newRating) => {
    this.setState({
      conditionRating: newRating,
    });
  };

  handleValueSubmit = async (values, dispatch) => {
    const { conditionRating } = this.state;
    const { weight, images, clear } = this.props;
    const newValues = {
      ...values,
      condition: conditionRating.toString(),
      weight: weight.weight.value,
      images: images.images.map(image => image.imageName),
    };
    values.category.map((item, key) => {
      newValues.category[key] = item.value;
      return null;
    });
    await postForm(newValues, () => {
      this.notify();
    });
    this.setState({ conditionRating: 0 });
    dispatch(clearImages());
    dispatch(clearWeight());
    dispatch(clear());
  };

  renderInputFields() {
    const { changeConditionRating } = this;
    const { conditionRating, isSmallResolution } = this.state;
    const { weight } = this.props;


    return _.map(Fields, ({ label, name, inputClass }) => (
      <Field
        key={name}
        multi={name === 'category' ? true : ''}
        options={name === 'category' ? Categories : ''}
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
          <ToastContainer autoClose={3000} transition={Slide} hideProgressBar />
        </form>
      </div>
    );
  }
}

const Form = reduxForm({
  form: 'simple',
  validate, // a unique identifier for this form
  enableReinitialize: true,
})(AddItemForm);

const mapStateToProps = state => ({
  weight: state.weight,
  templates: state.templates,
  images: state.images,
  initialValues: state.initial.data,
});

const mapDispatchToProps = () => ({
  postForm,
  getTemplates: fetchTemplates,
  clear: clearData,
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
