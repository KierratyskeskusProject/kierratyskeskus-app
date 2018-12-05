import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class Notification extends Component {
  notify = () => toast.success('Item added successfully', {
    position: toast.POSITION.TOP_CENTER,
  });

  render() {
    return (
      <ToastContainer autoClose={3000} />
    );
  }
}
