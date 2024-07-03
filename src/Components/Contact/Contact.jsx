import css from "./Contact.module.css";

export const Contact = ({ user: { id, name, number }, onDelete }) => {
    return (
        <div className={css.maincontainer}>
            <div className={css.container}>
                <p>
                    <FaUser className={css.icon} />
                    {name}
                </p>
                <p>
                    <FaPhone className={css.icon} />
                    {number}
                </p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                <FaUserMinus className={css.icon} />
                Delete
            </button>
        </div>
    );
};