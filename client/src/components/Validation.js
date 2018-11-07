export default function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Could you please enter a name';
  }
  if (values.title && values.title.length > 100) {
    errors.title = 'Maybe a too long for a product name';
  }
  if (!values.condition) {
    errors.condition = 'Could you 1nter a condition';
  }
  if (values.price && !values.price.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
    errors.price = 'Could you please enter a valid number for a price';
  }
  if (!values.category) {
    errors.category = 'Enter a category!';
  }

  if (values.weight && !values.weight.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
    errors.weight = 'Could you please enter a valid number for a weight';
  }

  if (!values.duration) {
    errors.duration = 'Enter a duration!';
  }
  if (!values.description) {
    errors.description = 'Enter a description';
  }
  return errors;
}
