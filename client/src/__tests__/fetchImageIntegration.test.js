// import React from 'react';
// import { mount } from 'enzyme';
// import moxios from 'moxios';

// import Root from '../Root';
// import App from '../App';

// beforeEach(() => {
//   moxios.install();
//   moxios.stubRequest('http://localhost:5000/capture', {
//     status: 200,
//     response: {
//       imageInBase64: 'base64', imageName: 'image.jpg', Labels: ['test1', 'test2'], text: [],
//     },
//   });
// });

// afterEach(() => {
//   moxios.uninstall();
// });


// it('can fetch a image and display it', (done) => {
//   const wrapped = mount(
//     <Root>
//       <App />
//     </Root>,
//   );

//   wrapped.find('.btn addImage').simulate('click');

//   moxios.wait(() => {
//     wrapped.update();

//     // TODO: do a test for showing an image to a user when its ready to be tested
//     expect(wrapped.find('').length).toEqual(0);

//     done();
//     wrapped.unmount();
//   });
// });
