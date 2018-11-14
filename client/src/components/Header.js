import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header row">
        <div className="headerLeft col-4">
          <h1>Add Item</h1>
          {/* Page title */}
        </div>
        <div className="headerMiddle col-4" />
        {/* Spacing */}
        <div className="headerRight col-4">
          {/* Action/setting buttons? */}
        </div>
      </div>
    );
  }
}

export default Header;
