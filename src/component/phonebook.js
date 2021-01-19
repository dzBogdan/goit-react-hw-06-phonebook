import { useState} from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';


import './phonebook.moduls.css';

  
export default function Phonebook (){
  
  
   
        return(
            <div>
              
                <h2>Телефонная книга</h2>
                <ContactForm />
                <Filter />               
                <ContactsList />  
                      
            </div>   
        )
    
} 

