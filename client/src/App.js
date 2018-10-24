import React, { Component } from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="trunk">
          <AddItemForm />
        </div>
      </div>
    );
  }
}
export default App;
