import Fields from '../Fields';

it('has right fields for a form', () => {
  const currentFields = Fields;
  const expectedFields = [
    { label: 'Product Name', name: 'title' },
    { label: 'Condition', name: 'condition' },
    { label: 'Price (€)', name: 'price' },
    { label: 'Category', name: 'category' },
    { label: 'Product weight (kg)', name: 'weight' },
    { label: 'Duration (Days)', name: 'duration' },
    { label: 'Product Description', name: 'description' },
  ];

  expect(currentFields).toEqual(expectedFields);
});
