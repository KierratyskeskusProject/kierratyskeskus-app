import React, { Component } from "react";
import "./App.css";

//redux
import { connect } from "react-redux";
import { productInfo } from "./redux/actions/productAction";

import ProductForm from './components/Form';

const mapStateToProps = state => ({
  product: state.product,
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  productDispatch: payload => dispatch(productInfo(payload))
});
//redux ends

class App extends Component {

  changeFieldData = (values) => {
    //console.log(values);
  }

  updateStates = async (e) => {

    let info = Object.assign({}, this.props.product);

    switch(e.target.name){
      case 'title':
        console.log('title hit');
        info.title = e.target.value;
      break;
      case 'shelfNo':
        console.log('shelfNo hit');
        info.shelfNo = e.target.value;
        break;
      case 'description':
        console.log('description hit');
        info.description = e.target.value;
      break;
        default: return false;
    }
    this.props.productDispatch(info);
  }


  render() {
    //console.log(this.props.product);
      return(
          <div className="App">
            <div className="panel">
              <h2>forms</h2>
              <div className="formData">
                <p>redux-form</p>
                <ProductForm onChange={()=> this.changeFieldData} />
              </div>

              <div className="formData">
                <p>custom-form</p>
                  <form onChange={(e)=> this.updateStates(e)}>
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><input type="number" name="shelfNo" placeholder="shelf no"/></p>
                    <p><input type="text" name="description" placeholder="description"/></p>
                  </form>
              </div>
            </div>


            <div className="panel">
              <h2> redux results</h2>

              <div className="formData">
                <p>redux-form data</p>
              </div>

              <div className="formData">
                <p>custom form data</p>
                <p>{this.props.product.title}</p>
                <p>{this.props.product.shelfNo}</p>
                <p>{this.props.product.description}</p>
              </div>

            </div>
          </div>
      )
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
