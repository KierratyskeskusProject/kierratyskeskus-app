import React, { Component } from "react";
import "./App.css";

//redux
import { connect } from "react-redux";
import { productInfo } from "./redux/actions/productAction";

import ProductForm from './components/Form';

//get access to the states in the the store
const mapStateToProps = (state) => ({
  product: state.product,
  form: state.form,
});

//this allows you to dispatch actions and send the payload to the actions.
const mapDispatchToProps = dispatch => ({
  productDispatch: payload => dispatch(productInfo(payload))
});
//redux ends

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
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



  renderContent = (product) =>{
    console.log(product);
/*
    const title={product.title};
    const shelfNo= {product.shelfNo};
    const description ={product.description};
  */
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

    render() {

        return(
            <div className="App">
              <div className="panel">
                <h2>forms</h2>
                <div className="formData">
                  <p>redux-form</p>
                  <ProductForm />
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

//we export through the connect function and adds mapStateToProps and mapDispatchToProps,
//if only one is used then only export with that.
export default connect(mapStateToProps,mapDispatchToProps)(App);
