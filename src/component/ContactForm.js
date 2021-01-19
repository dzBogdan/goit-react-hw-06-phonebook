import { useState } from 'react';
import typeAction from '../redux/action';
import shortid from 'shortid';
import './phonebook.moduls.css';
import { connect } from 'react-redux';



 function ContactForm({handleButtonAdd }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputNameChenge = event => {
        setName(event.currentTarget.value);
        
                 
    }

    const handleInputNumberChenge = event => {
        setNumber(event.currentTarget.value);
    }

   const  handleAdd = event =>{
        const element =  {
            id:shortid.generate(),
            name:name,
            number:number
        }
        
        handleButtonAdd(element);
          
      } 


    

    return (
        <div>
            <label className="phoneBook__name">Имя
                <input type="text"
                    value={name}
                    onChange={handleInputNameChenge}
                    className="name__input"
                />
            </label>
            <br />
            <label className="phoneBook__number"> Номер
                <input type="text"
                    value={number}
                    onChange={handleInputNumberChenge}
                    className="number__input"
                />
            </label>
            <br />
            <button type="button" onClick={handleAdd}
                className="phoneBook__button">Добавить контакт</button>
            <br />
        </div>);
}

const mapDispatchtoProp = dispatch => ({
    handleButtonAdd : element => dispatch(typeAction.addContacs(element))
}) 

export default connect(null,mapDispatchtoProp)(ContactForm)


