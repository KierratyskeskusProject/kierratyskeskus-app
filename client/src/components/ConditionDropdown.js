import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap/lib';


export default () => (
  <ButtonToolbar>
    <DropdownButton
      bsStyle="default"
      title="Condition"
      noCaret
      id="dropdown-no-caret"
    >
      <MenuItem eventKey="1">*</MenuItem>
      <MenuItem eventKey="2">**</MenuItem>
      <MenuItem eventKey="3">***</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
);
