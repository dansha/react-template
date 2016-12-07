import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';


const configureStore =() =>{
  const persistedState=loadState();
  //consfigure store for dev
  //todo replace with 2 configure stores (dev,prod)
  const store = createStore(rootReducer, persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  store.subscribe(throttle(() => {
    saveState({
      categories: store.getState().categories,
      locations: store.getState().locations
     });
  },1000));

  return store;
}

export default configureStore;