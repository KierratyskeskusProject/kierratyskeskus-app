import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Fields from './Fields';
import _ from 'lodash';


class AddItemForm extends Component {
    renderFields() {
        return _.map(Fields, ({ label, name }) => {
            return (
                <Field 
                // key={name}
                 component={input}
                 type='text'
                 label={label}
                 name={name}
                />
            )
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    {this.renderFields()}
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default reduxForm({
  form: 'simple'
})(AddItemForm)

