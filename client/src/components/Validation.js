export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a name!';
  }
  if (!values.condition) {
    errors.condition = 'Enter a condition!';
  }
  if (Number.isNaN(Number(values.price))) {
    errors.price = 'Please enter a number for a price';
  }
  if (!values.category) {
    errors.category = 'Enter a category!';
  }

  if (Number.isNaN(Number(values.weight))) {
    errors.weight = 'Please enter a number for a weight';
  }

  if (!values.duration) {
    errors.duration = 'Enter a duration!';
  }
  if (!values.description) {
    errors.description = 'Enter a description';
  }

  // if errors Object is empty form is valid
  return errors;
}
