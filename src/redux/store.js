import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ContactReducer from './reducer';
import { render } from '@testing-library/react';

const rootreducer = combineReducers({
    contacts: ContactReducer
})

//const store = createStore(reducer, composeWithDevTools());
const store = configureStore({
    reducer: rootreducer,
})


export default store;