import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header row">
        <div className="logo col-4">
          <h1>Add Item</h1>
          {/* Replace with company logo, if it's included */}
        </div>
        <div className="headerContent col-4" />
          {/* Space for page title if company logo is used */}
        <div className="heading col-4">
          {/* Action/setting buttons? */}
        </div>
      </div>
    );
  }
}

export default Header;
