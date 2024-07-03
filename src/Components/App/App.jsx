import "./App.css"
import { useState, useEffect } from "react";
import { ContactForm } from "../ContactForm/ContactForm"
import { SearchBox } from "../SearchBox/SearchBox"
import { ContactList } from "../ContactList/ContactList"
import { Contact } from "../Contact/Contact"



const App = () => {

    const dataUserContact = [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        { id: "id-4", name: "Vasyl Kozhokar", number: "555-55-55" },
    ];
    const [contacts, setContacts] = useState(() => {
        const savedContact = localStorage.getItem("my-key");
        return savedContact !== null ? JSON.parse(savedContact) : dataUserContact;
    });

    const [filter, setFilter] = useState("");

    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    };

    function filtered(e) {
        setFilter(e.target.value);
    }

    const filterContact = () => {
        return contacts.filter((user) =>
            user.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
        );
    };

    const filteredContact = filterContact();

    useEffect(() => {
        window.localStorage.setItem("my-key", JSON.stringify(contacts));
    }, [contacts]);

    const deleteContact = (userId) => {
        setContacts((prevContacts) =>
            prevContacts.filter((user) => {
                return user.id !== userId;
            })
        );
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            <Contact />
        </div>

    );
};

export default App;