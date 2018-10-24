import { postForm } from '../postFormAction';
import { POST_FORM_SUCCESS, postFormSuccess } from '../../types/index';

describe('postForm', () => {
  it('has the correct type', () => {
    const action = postForm();
    const postFormType = POST_FORM_SUCCESS;

    expect(action.type).toEqual(postFormType);
  });

  it('has the correct payload', () => {
    const action = postFormSuccess('New Comment');

    expect(action.payload.formData).toEqual('New Comment');
  });
});
