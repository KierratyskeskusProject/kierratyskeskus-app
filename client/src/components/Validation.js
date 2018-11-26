export default function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please enter a name';
  }
  if (values.title && values.title.length > 100) {
    errors.title = 'Maybe a too long for a product name';
  }
  /*   if (!values.condition) {
    errors.condition = 'Enter a condition!';
  } */
  if (!values.price) {
    errors.price = 'Please enter a price';
  }
  if (values.price && !values.price.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
    errors.price = 'Please enter a valid number for a price';
  }
  if (!values.category) {
    errors.category = 'Please enter a category!';
  }
  if (values.weight && !values.weight.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
    errors.weight = 'Please enter a valid number for a weight';
  }

  if (!values.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
}
