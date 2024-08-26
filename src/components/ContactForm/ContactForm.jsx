import css from './ContactForm.module.css';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema =Yup.object({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm ({addContact}) {
    return (
        <Formik className={css.contactForm}
        initialValues={{name: '', number: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
            addContact(values);
            resetForm();
        }}
    >
        <Form>
            <label>
                Name
                <Field name='name' type='text' />
                <ErrorMessage name='name' component='div' />
            </label>
            <label>
                Number
                <Field name='number' type='text' />
                <ErrorMessage name='number' component='div' />
            </label>
            <button type='submit'>Add contact</button>
        </Form>
    </Formik>
    )
};
