import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm"

import { FaUserPlus, FaPhone, FaUser } from "react-icons/fa6";


const ContactShema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, "Please enter your name. Minimum length of three characters.")
        .max(50, "Too long!")
        .required("This field is required"),
    number: Yup.string()
        .min(
            10,
            "Please enter your phone number. The minimum length is ten digits without a dash/thirteen with a dash."
        )
        .max(13, "Too long!")
        .required("This field is required"),
});

export const ContactForm = ({ onAdd }) => {

    const nameId = useId();
    const numberId = useId();

    return (
        <Formik initialValues={{
            name: "",
            number: "",
        }}

            validationSchema={ContactShema}
            onSubmit={(values, actions) => {
                onAdd({ id: nanoid(), ...values });
                actions.resetForm();
            }}
        >

            <Form className={css.form}>
                <div className={css.labelName}>
                    <label htmlFor={nameId}>Name</label>
                    <Field className={css.field} name="name" id={nameId} />
                    <FaUser className={css.icon} />
                    <span className={css.message}>
                        <ErrorMessage name="name" />
                    </span>
                </div>
                <div className={css.labelNumber}>
                    <label htmlFor={numberId}>Number</label>
                    <Field className={css.field} name="number" id={numberId} />
                    <FaPhone className={css.icon} />
                    <span className={css.message}>
                        <ErrorMessage name="number" />
                    </span>
                </div>
                <button className={css.btn} type="submit">
                    <FaUserPlus />
                    Add Contact
                </button>
            </Form>

        </Formik>
    );
}