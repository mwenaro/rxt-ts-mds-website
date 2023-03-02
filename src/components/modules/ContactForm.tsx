import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm: React.FC = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Contact Us
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Have a question or want to learn more about our services? Fill out
                        the form and we'll get back to you within 24 hours.
                    </p>
                    <Field
                        name="name"
                        placeholder="Name"
                        className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-xs"
                    />
                    <Field
                        name="email"
                        placeholder
                        ="Email"
                        type="email"
                        className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                    />
                    <Field
                        name="phone"
                        placeholder="Phone Number"
                        className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    />
                    <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-xs"
                    />
                    <Field
                        name="message"
                        placeholder="Message"
                        component="textarea"
                        rows="4"
                        className="bg-gray-100 rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                    />
                    <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>

    );
}

export default ContactForm;    