import axios from 'axios';

import {restApiUri} from './api-uris';

export default axios.create({
  baseURL: restApiUri,
  headers: {
    'Content-type': 'application/json',
  },
});
