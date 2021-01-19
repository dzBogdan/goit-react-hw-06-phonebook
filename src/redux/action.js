import { createAction } from '@reduxjs/toolkit';
import type from './type';


const addContacs = createAction(type.ADD);

const deleteContacs = createAction(type.DELETE);

const changeFiltr = createAction(type.CHANGE);

//const addContacs = (element) => ({
//    type: type.ADD,
//    payload: element
//});

//const deleteContacs = id => ({
//    type: type.DELETE,
//    payload: id
//});

//const changeFiltr = value => ({
//    type: type.CHANGE,
//    payload: value
//})

export default {addContacs,deleteContacs,changeFiltr}