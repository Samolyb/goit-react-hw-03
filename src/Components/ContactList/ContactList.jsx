import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export const ContactList = ({ contactsData, onDelete }) => {
    return (
        <>
            <ul className={css.list}>
                {contactsData.map((user) => {
                    return (
                        <li key={user.id}>
                            <Contact user={user} onDelete={onDelete} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};