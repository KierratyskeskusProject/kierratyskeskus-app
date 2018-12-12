import getTemplateCategory from '../getTempCat';
import {
  category, bData, formFields, Categories, templates,
} from '../getTempCatTestData';
import {
  cat, bookData, form, Cats, temps,
} from '../getBookData';

const mockFunc = getTemplateCategory;

it('should return an object with a title, description and a category', () => {
  const getTempCat = mockFunc(category, Categories, templates, bData, formFields);
  expect(getTempCat).toMatchObject({
    title: null,
    description: {
      blocks: [{
        key: '9i33j', text: ' can you read the styling herere KITCHEN', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {},
      }, {
        key: '6f513', text: 'maybe we gonna crash', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {},
      }, {
        key: 'eq5s9', text: 'yo ! new book in a store', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {},
      }],
      entityMap: {},
    },
    category: [[{ label: 'keittiö', value: '5' }]],
  });
});

it('should return an object with book data', () => {
  const getTempCat = mockFunc(cat, Cats, temps, bookData, form);
  expect(getTempCat).toMatchObject({
    title: 'Harry Potter ja viisasten kivi',
    description: { blocks: [{ text: '"Kun Harry käänsi kirjekuoren vapisevin käsin ympäri, hän näki purppuranpunaisen vahasinetin, jossa oli vaakuna: leijona, kotka, mäyrä ja käärme ison T-kirjaimen ympärillä. " Harry Potter ei ole koskaan kuullutkaan Tylypahkasta kun kirjeitä alkaa sadella sisään Likusteritie 4:n postiluukusta. Harryn karmea setä ja täti takavarikoivat pikaisesti kellertävälle pergamenttipaperille vihreällä musteella kirjoitetut kirjeet. Sitten, Harryn 11. syntymäpäivänä, koppakuoriaissilmäinen ja jättikokoinen mies nimeltä Rubeus Hagrid paukahtaa ovesta sisään hämmentävien uutisten kera: Harry Potter on velho, ja hänelle on varattu paikka Tylypahkan noitien ja velhojen koulusta. Uskomaton seikkailu on alkamassa!\n\nPottermore Publishing, 2016\n335 pages' }] },
    category: [[]],
  }); // category should be [[{ label: 'Kirjat', value: '4' }]];
});
