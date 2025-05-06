import { createStore, combineReducers }  from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    productsState: productReducer,
    cartState: cartReducer
});

const store = createStore(rootReducer);

export default store;