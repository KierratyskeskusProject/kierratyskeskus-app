import axios from 'axios';

export const POST_FORM = 'post_form';

export function postForm(values) {
<<<<<<< HEAD
  const request = axios.post('http://localhost:5000/products', values);
=======
  const request = axios.post('/', values);
>>>>>>> e2b2fb4e3e6093c4f423a5ec1eacee677f2232a0

  return {
    type: POST_FORM,
    payload: request,
  };
}
