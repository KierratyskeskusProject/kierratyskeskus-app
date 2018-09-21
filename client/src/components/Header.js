import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header row">
                <div className="logo col-3">
                    <h1>Placeholder</h1>
                </div>
                <div className="headerContent col-5">
                </div>
                <div className="heading col-4">
                    <h1>Add Item</h1>
                </div>
            </div>
        );
    }
}

export default Header;