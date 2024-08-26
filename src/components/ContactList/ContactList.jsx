import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx'

export default function ContactList({contacts, deleteContact}) {
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} deleteContact={deleteContact} />
            ))}
        </ul>
    );
}