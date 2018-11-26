import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      templateManagerActive: false,
    };
  }

  toggleTemplateManagerActive = () => {
    const { templateManagerActive } = this.state;
    this.setState({
      templateManagerActive: !templateManagerActive,
    });
  };

  render() {
    const { templateManagerActive } = this.state;
    return (
      <div>
        <Header
          title={templateManagerActive ? 'Template Manager' : 'Add Item'}
          route={templateManagerActive ? '/' : '/template-manager'}
          routeTitle={templateManagerActive ? 'Add Item' : 'Template Manager'}
          handleClick={this.toggleTemplateManagerActive}
        />
        <Main />
      </div>

    );
  }
}
export default App;
