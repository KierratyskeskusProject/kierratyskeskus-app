export default function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name!';
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
  if (!values.duration) {
    errors.duration = 'Enter a duration!';
  }

  // if errors Object is empty form is valid
  return errors;
}
