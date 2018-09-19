import React from 'react';
import { Field, reduxForm } from 'redux-form';

const personForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" placeholder="firstname" component="input" type="text" />
      </div>
      <div>
        <Field name="lastName" placeholder="lastname" component="input" type="text" />
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'personForm',
  // enableReinitialize: true,
})(personForm);
