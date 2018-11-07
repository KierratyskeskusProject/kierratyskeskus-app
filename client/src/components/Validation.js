export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a name!';
  }
  if (!values.condition) {
    errors.condition = 'Enter a condition!';
  }
  if (!values.price) {
    errors.price = 'Enter a price!';
  }
  if (!values.category) {
    errors.category = 'Enter a category!';
  }
  if (!values.weight) {
    errors.weight = 'Enter a weight!';
  }
  if (!values.description) {
    errors.description = 'Enter a description';
  }

  // if errors Object is empty form is valid
  return errors;
}
