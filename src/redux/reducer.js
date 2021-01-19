import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import typeAction from "./type"
import action from './action';



const arr = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
]


const AddContact = (state, payload) => {
    const getContactbyName = (arr, name) => arr.find(arr =>arr.name===name);
    const findContact = getContactbyName(state, payload.name);

    
    if (findContact) {
        window.alert('Контакт с таким именем существует');
        return state
    }
    else {
        return [...state, payload]
    }
}

const items = createReducer(arr, {
    'phonebook/add': (state, action) => AddContact(state, action.payload),
    'phonebook/delete': (state, action) => state.filter(contact => contact.id !== action.payload)
    
}); 

const filter =createReducer('', {
    'phonebook/change': (state, action) => action.payload
 }) 

export default combineReducers({
    items,
    filter
})