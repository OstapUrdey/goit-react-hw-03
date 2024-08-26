import css from './Contact.module.css'

export default function Contact ({name, number, id, deleteContact}) {
    return (
        <li className={css.contactItem}>
            {name}: {number}
            <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
    );
}