
import { connect } from 'react-redux';
import typeAction from '../redux/action';
import './phonebook.moduls.css';



function ContactList({ contacts, onDeleteContact }) {
   
    return (
        <div>
            <h3>Контакты</h3>
            <ul className="contact__list">
                {contacts.map(item => (
                    <li key={item.id} className="list__item">
                        <p>{`${item.name} : ${item.number}`}</p>
                        <button className="list__button" onClick={() => onDeleteContact(item.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}  

const mapStateToProp = state => {
    const { filter, items } = state.contacts;
    const normolizefilter = filter.toLowerCase();
    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normolizefilter));
    return { contacts: visibleContacts }
}

const mapDispatchToProp = dispatch => ({
    onDeleteContact: id => dispatch(typeAction.deleteContacs(id))
})

export default connect(mapStateToProp,mapDispatchToProp)(ContactList)