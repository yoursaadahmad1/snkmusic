"use client"
import { contact_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(true);
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                number: "",
                subject: "",
                massage: "",
            },
            validationSchema: contact_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Contact Successful")
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="ms-input2-box mb-30">
                            <input type="text" placeholder="Name" name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required />
                            {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-input2-box mb-30">
                            <input name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                id="email"
                                required
                                placeholder="Email" />
                            {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-input2-box mb-30">
                            <input type="text" name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Subject"
                                required
                            />
                            {touched.subject && <ErrorMsg error={errors.subject} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-input2-box mb-30">
                            <input type="text" name="number"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Phone Number"
                                required
                            />
                            {touched.number && <ErrorMsg error={errors.number} />}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-input2-box mb-30">
                            <textarea cols={30} rows={10}
                                name='massage'
                                value={values.massage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Write Message . . ."
                                required
                            ></textarea>
                            {touched.massage && <ErrorMsg error={errors.massage} />}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-checkbox">
                            <span>Save my name, email, and website in this browser for
                                the next time I comment.</span>
                            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                            <span className="checkmark"></span>
                        </div>
                        <div className="ms-submit-btn mt-40">
                            <button className="unfill__btn" type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;