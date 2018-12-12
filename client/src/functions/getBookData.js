const cat = [{ label: 'Kirjat', value: '4' }];
const bookData = {
  title: 'Harry Potter ja viisasten kivi',
  authors: ['J.K. Rowling'],
  description: '"Kun Harry käänsi kirjekuoren vapisevin käsin ympäri, hän näki purppuranpunaisen vahasinetin, jossa oli vaakuna: leijona, kotka, mäyrä ja käärme ison T-kirjaimen ympärillä. " Harry Potter ei ole koskaan kuullutkaan Tylypahkasta kun kirjeitä alkaa sadella sisään Likusteritie 4:n postiluukusta. Harryn karmea setä ja täti takavarikoivat pikaisesti kellertävälle pergamenttipaperille vihreällä musteella kirjoitetut kirjeet. Sitten, Harryn 11. syntymäpäivänä, koppakuoriaissilmäinen ja jättikokoinen mies nimeltä Rubeus Hagrid paukahtaa ovesta sisään hämmentävien uutisten kera: Harry Potter on velho, ja hänelle on varattu paikka Tylypahkan noitien ja velhojen koulusta. Uskomaton seikkailu on alkamassa!',
  pageCount: 335,
  publisher: 'Pottermore Publishing',
  publishedDate: '2016-08-23',
};
const form = {
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
const Cats = [
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

const temps = { templates: ['{"name":"keittiö","id":1544619275454,"content":{"blocks":[{"key":"9i33j","text":" can you read the styling herere KITCHEN","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6f513","text":"maybe we gonna crash","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eq5s9","text":"yo ! new book in a store","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"category":"5","subCategory":"5"}', '{"name":"Matkaoppaat ja sanakirjat","id":1544619595093,"content":{"blocks":[{"key":"3tuud","text":"neeed some tweaks on top of categories","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"category":"4","subCategory":"4.13"}', '{"name":"Elektroniikka","id":1544619749959,"content":{"blocks":[{"key":"59g7o","text":"are you here?","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"category":"2","subCategory":"2"}', '{"name":"Scifi, Fantasia ja Jännitys","id":1544620919002,"content":{"blocks":[{"key":"b2dgs","text":"KUVAUS TÄHÄN","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":12,"style":"color-rgb(51,51,51)"},{"offset":0,"length":12,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":12,"style":"fontsize-15"},{"offset":0,"length":12,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}},{"key":"46k1n","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1mn0q","text":"Paidan pituus: X","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":16,"style":"color-rgb(51,51,51)"},{"offset":0,"length":16,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":16,"style":"fontsize-15"},{"offset":0,"length":16,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}},{"key":"4j7ag","text":"Hihan pituus: X","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":15,"style":"color-rgb(51,51,51)"},{"offset":0,"length":15,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":15,"style":"fontsize-15"},{"offset":0,"length":15,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}},{"key":"ddebv","text":"Rinnanympärys: X","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":16,"style":"color-rgb(51,51,51)"},{"offset":0,"length":16,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":16,"style":"fontsize-15"},{"offset":0,"length":16,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}},{"key":"d47jg","text":"Vyötärönympärys: X","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":18,"style":"color-rgb(51,51,51)"},{"offset":0,"length":18,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":18,"style":"fontsize-15"},{"offset":0,"length":18,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}},{"key":"5duji","text":"Lantionympärys: X","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":17,"style":"color-rgb(51,51,51)"},{"offset":0,"length":17,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":17,"style":"fontsize-15"},{"offset":0,"length":17,"style":"fontfamily-EB Garamond\\", serif"}],"entityRanges":[],"data":{}}],"entityMap":{}},"category":"4","subCategory":"4.1"}'], loading: false, error: false };

export {
  cat, bookData, form, Cats, temps,
};
