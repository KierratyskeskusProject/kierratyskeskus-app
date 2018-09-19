import React, { Component } from 'react';
import './App.css';

// redux
import { connect } from 'react-redux';
import { productInfo } from './redux/actions/productAction';
import { personInfo } from './redux/actions/personAction';

import ProductForm from './components/Form';
import PersonForm from './components/personForm';

// get access to the states in the the store
const mapStateToProps = state => ({
  product: state.product,
  person: state.person,
  form: state.form,
});

// this is where you (can) dispatch actions and send the payload to the actions.
const mapDispatchToProps = dispatch => ({
  productDispatch: payload => dispatch(productInfo(payload)),
  personDispatch: payload => dispatch(personInfo(payload)),
});
// redux ends

class App extends Component {
  updateStates = (event) => {
    const { product } = this.props;
    const info = Object.assign({}, product);
    switch (event.target.name) {
      case 'title':
        info.title = event.target.value;
        break;
      case 'shelfNo':
        info.shelfNo = event.target.value;
        break;
      case 'description':
        info.description = event.target.value;
        break;
      case 'firstName':
        return this.props.personDispatch({
          ...this.props.person,
          firstName: event.target.value,
        });
      case 'lastName':
        return this.props.personDispatch({
          ...this.props.person,
          lastName: event.target.value,
        });
      default:
        return false;
    }
    const { productDispatch } = this.props;
    return productDispatch(info);
  };

  render() {
    const { product: { title, shelfNo, description } } = this.props;
    return (
      <div className="App">
        <div className="panel">
          <h2>forms</h2>
          <div className="formData">
            <p>redux-form</p>
            <ProductForm />
          </div>

          <div className="formData">
            <p>custom-form</p>
            <form onChange={event => this.updateStates(event)}>
              <p>
                <input type="text" name="title" placeholder="title" />
              </p>
              <p>
                <input type="number" name="shelfNo" placeholder="shelf no" />
              </p>
              <p>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                />
              </p>
            </form>
          </div>
          <h1>Person</h1>
          <PersonForm />

          <p>custom-form</p>
          <form onChange={event => this.updateStates(event)}>
            <p>
              <input type="text" name="firstName" placeholder="firstname" />
            </p>
            <p>
              <input type="text" name="lastName" placeholder="lastname" />
            </p>
          </form>
        </div>

        <div className="panel">
          <h2> redux results</h2>

          <div className="formData">
            <p>redux-form data</p>
          </div>

          <div className="formData">
            <p>custom form data</p>
            <p>{title}</p>
            <p>{shelfNo}</p>
            <p>{description}</p>

          </div>
        </div>
      </div>
    );
  }
}

// we export through the connect function and adds mapStateToProps and mapDispatchToProps,
// if only one is used then only export with that.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
