import createStore from './create-store';
import counter from '../reducers/counter-reducer';

const store = createStore(counter);

export default store;