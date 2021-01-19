import React from 'react';
import { connect } from 'react-redux';
import typeAction from '../redux/action';
import './phonebook.moduls.css';

 function Filter({ value,onChange}) { 
  return (
     <>
     <label>Фильтр для поиска</label>
     <br/>
      <input type="text"
                value={value}
                onChange={onChange}
                className="filter__input"
      />
     </> 
  )
}

const mapStateToProp = (state) => ({
  value: state.contacts.filter
});

const mapDispatchtoProp = dispatch => ({
    onChange : (event) => dispatch(typeAction.changeFiltr(event.target.value))
}) 

export default connect(mapStateToProp, mapDispatchtoProp)(Filter)