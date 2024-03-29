import { createStore } from 'redux';
import rootReducer from './redusers/index';
import { loadStateFromSessionStorage, saveStateToSessionStorage } from '../../utils/functions';

export const initialState = loadStateFromSessionStorage() || {
  basket: [],
  totalItems: 0,
  totalPrice: 0
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  saveStateToSessionStorage(store.getState());
});

export default store;