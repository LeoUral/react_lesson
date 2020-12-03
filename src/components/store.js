//тут само хранилище

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;