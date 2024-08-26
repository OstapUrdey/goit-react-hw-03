import css from "./App.module.css"

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid'

const phoneContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]



export default function App() {

    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')) ?? phoneContacts;
    });
    const [search, setSearch] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    const addContact = (newContact) => {
        const contact = { id: nanoid(), ...newContact };
        setContacts(prevContacts => [...prevContacts, contact]);
    };

    const deleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

    return (
            <div className={css.app}>
                <h1>Phonebook</h1>
                <ContactForm addContact={addContact} />
                <SearchBox search={search} onSearch={setSearch} />
                <ContactList contacts={filterContacts} deleteContact={deleteContact}/>
            </div>
    )
};