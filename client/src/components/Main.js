import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddItemForm from './AddItemForm';
import { TemplateManager } from './templateManager';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AddItemForm} />
      <Route exact path="/template-manager" component={TemplateManager} />
    </Switch>
  </main>
);


export default Main;
