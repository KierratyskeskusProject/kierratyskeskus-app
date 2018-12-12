import Fields from '../Fields';

it('has right fields for a form', () => {
  const currentFields = Fields;
  const expectedFields = [
    { label: 'Product Name', name: 'title', inputClass: 'col-6' },
    { label: 'Condition', name: 'condition', inputClass: 'col-6' },
    { label: 'Price (€)', name: 'price', inputClass: 'col-2' },
    { label: 'Category', name: 'category', inputClass: 'col-6' },
    { label: 'Weight (g)', name: 'weight', inputClass: 'col-2' },
    { label: 'Description', name: 'description', inputClass: 'col-6' },
  ];

  expect(currentFields).toMatchObject(expectedFields);
});
