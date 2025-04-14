import React, { useContext } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { AppContext } from "../../context/AppContext";

export const ContactsPage = () => {
  const { contacts } = useContext(AppContext);

  return (
    <div>
      <section>
        <h2>Přidat kontakt</h2>
        <ContactForm/>
      </section>
      <hr />
      <section>
        <h2>Kontakty</h2>
        <div>
          { contacts.length > 0 ? (
            <TileList name="contact-tilelist"/>
          ) : (
            <p>Zatím nebyly přidány žádné kontakty</p>
          )}
        </div>
      </section>
    </div>
  );
};
