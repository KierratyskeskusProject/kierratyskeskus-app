const category = 'kitchenware';
const bookData = null;
const formFields = {
  simple: {
    syncErrors: {
      title: 'Please enter a name', price: 'Please enter a price', category: 'Please enter a category!', description: 'Please enter a description',
    },
    values: { content: 0 },
    registeredFields: {
      title: { name: 'title', type: 'Field', count: 1 }, condition: { name: 'condition', type: 'Field', count: 1 }, price: { name: 'price', type: 'Field', count: 1 }, category: { name: 'category', type: 'Field', count: 1 }, weight: { name: 'weight', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 },
    },
  },
};
const Categories = [
  {
    name: 'new',
    label: 'Uutuudet',
    value: '1',
  },
  {
    name: 'electronics',
    label: 'Elektroniikka',
    value: '2',
  },
  {
    name: 'bicycle',
    label: 'Polkupyörät',
    value: '3',
    options: [
      { label: 'Miestenpyörät', value: '3.1' },
      { label: 'Naistenpyörät', value: '3.2' },
      { label: 'Lastenpyörät', value: '3.3' },
    ],
  },
  {
    name: 'book',
    label: 'Kirjat',
    value: '4',
    options: [
      { label: 'Scifi, Fantasia ja Jännitys', value: '4.1' },
      { label: 'Kaunokirjat', value: '4.2' },
      { label: 'Tietokirjat', value: '4.3' },
      { label: 'Historia', value: '4.4' },
      { label: 'Taide ja kulttuuri', value: '4.5' },
      { label: 'Musiikki', value: '4.6' },
      { label: 'Elämänkerrat ja muistelmat', value: '4.7' },
      { label: 'Terveys ja liikunta', value: '4.8' },
      { label: 'Ruokakirjat', value: '4.9' },
      { label: 'Sisustaminen', value: '4.10' },
      { label: 'Puutarha ja rakentaminen', value: '4.11' },
      { label: 'Lemmikit ja luonto', value: '4.12' },
      { label: 'Matkaoppaat ja sanakirjat', value: '4.13' },
      { label: 'Nuorten kirjat', value: '4.14' },
      { label: 'Lastenkirjat', value: '4.15' },
      { label: 'Runot ja näytelmät', value: '4.16' },
      { label: 'Sarjakuvat', value: '4.17' },
      { label: 'Kirja lahjaksi', value: '4.18' },
    ],
  },
  {
    name: 'kitchenware',
    label: 'keittiö',
    value: '5',
  },
];

const template = {};


export {
  category, bookData, formFields, Categories, template,
};
