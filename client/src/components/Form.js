import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProductForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" placeholder="title" component="input" type="text" />
      </div>
      <div>
        <Field name="shelfNo" placeholder="description" component="input" type="text" />
      </div>
      <div>
        <Field name="description" placeholder="shelf no" component="input" type="text" />
      </div>
    </form>
  )
}

ProductForm = reduxForm({
  form: 'productInfo',
  enableReinitialize: true,
})(ProductForm)

export default ProductForm
