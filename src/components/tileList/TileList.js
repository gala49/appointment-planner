import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Tile } from "../tile/Tile.js";

export const TileList = ({ name }) => {
  const { contacts, appointments } = useContext(AppContext);

  return (
    <div className="tilelist" style={{ display: 'flex', gap: '1.5rem'}}>
      { name === "contact-tilelist" && (
        contacts.map(contact => (
          <Tile key={contact.id} contact={contact}/>
        ))
      )}

      { name === "appointment-tilelist" && (
        appointments.map(appointment => (
          <Tile key={appointment.id} appointment={appointment}/>
        ))
      )}
    </div>
  );
};
