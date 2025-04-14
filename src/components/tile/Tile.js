import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Tile = ({ contact, appointment }) => {
  const { removeContact, removeAppointment } = useContext(AppContext);

  // remove contact with appropriate id from contacts array in AppContext.js
  const handleDeleteContactClick = () => {
    removeContact(contact.id);
  }

  const handleDeleteAppointmentClick = () => {
    removeAppointment(appointment.id);
  }

  return (
    <>
      { contact !== undefined && (
        <div className="tile">
          <span className="close-btn" onClick={handleDeleteContactClick}>x</span>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      )}

      { appointment !== undefined && (
        <div className="tile">
          <span className="close-btn" onClick={handleDeleteAppointmentClick}>x</span>
          <h3>{appointment.name}</h3>
          <p>{appointment.contactSelect}</p>
          <p>{appointment.date}</p>
          <p>{appointment.time}</p>
        </div>
      )}
    </>
  );
};
