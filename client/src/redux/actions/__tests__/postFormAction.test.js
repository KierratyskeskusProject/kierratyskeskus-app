import moxios from 'moxios';
import { postForm } from '../postFormAction';
import { POST_FORM_SUCCESS, postFormSuccess } from '../../types/index';

// Using moxios to do the 'POST' request on postFormAction otherwise we get a network error
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:5000/products', {
    status: 200,
    response: [],
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('postForm', () => {
  it('has the correct type', () => {
    const action = postForm();

    expect(action.type).toEqual(POST_FORM_SUCCESS);
  });

  it('has the correct payload', () => {
    const action = postFormSuccess('New Comment');

    expect(action.payload.formData).toEqual('New Comment');
  });
});
