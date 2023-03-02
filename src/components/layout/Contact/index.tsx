import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { ContactForm } from '../../modules';

const Contact: React.FC = () => {

    return (
        <section className="text-gray-700 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p2  sm:p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%" height="100%"
                        className="absolute inset-0 w-full"
                        frameBorder="0"
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.171704469684!2d39.67282231524111!3d-4.042173297052915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0ebeda287327%3A0x6b8e6b1d86464077!2sMombasa%20Digital%20Solutions!5e0!3m2!1sen!2ske!4v1645797140905!5m2!1sen!2ske"
                    ></iframe>
                    <div className="w-full bg-white relative flex flex-wrap py-6 rounded shadow-md ">
                        <div className="w-full lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                            <FaLocationArrow className="inline-block w-4 h-4 mr-2" />
                                Mombasa Digital Solutions, Likoni, Mombasa, Kenya
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:info@mds.com" className="text-indigo-500 leading-relaxed">
                            <FaEnvelope className="inline-block w-4 h-4 mr-2" />
                                info@mds.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                           
                                PHONE
                            </h2>
                            <p className="leading-relaxed">
                                <a href="tel:+254713559421" className="text-indigo-500">
                                    <FaPhoneAlt className="inline-block w-4 h-4 mr-2" />
                                    +254 713 559 421
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;    
