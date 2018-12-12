import getTemplateCategory from '../getTempCat';
import {
  category, bookData, formFields, Categories, template,
} from '../getTempCatTestData';

const mockFunc = getTemplateCategory;

it('should receive (category, Categories, template, bookData, formFields) as parameters', () => {
  // const getTempCat = mockFunc(category, Categories, template, bookData, formFields);
  console.log(template.templates[0]);

  // expect(getTempCat).toBe(typeof (getTempCat) === 'function');

  /* expect(getTempCat).toBe(typeof (getTempCat) === 'function'); const getTempCat = getTemplateCategory(
    category, Categories, template, bookData, formFields, */
});

/* expect(category).to.be.a.string;
  expect(Categories).to.be.an.Object;
  expect(template).to.be.an.Object;
  expect(bookData).to.be.an.Object;
  expect(formFields).to.be.an.Object; */


/* it('should return title, description and category according to bookData');
  it('should return a template with the category/categories already selected');
  it('should return category and template according to image'); */

/*
describe('Test functions for book detection', () => {
  it('should return a ISBN as a string', () => {
    const filter = handleDetectionData.filter(responseText);
    expect(filter).to.be.string;
    expect(filter).to.be.equal('978-951-31-8193-2');
  });
  it('should return null if no ISBN', () => {
    const filter = handleDetectionData.filter(responseTextFail);
    expect(filter).to.be.null;
  });
});
 */
