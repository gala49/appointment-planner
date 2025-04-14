import React, { createContext, useCallback, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const defaultContacts = [
    {
      id: 1744286845721,
      name: 'Atanas Dimitrov',
      phone: '07712345678',
      email: 'atanas@defaultemail.com'
    },
    {
      id: 1744286845722,
      name: 'John Doe',
      phone: '07787654321',
      email: 'john@defaultemail.com'
    }
  ]

  const [contacts, setContacts] = useState(defaultContacts);
  const [appointments, setAppointments] = useState([]);

  const addContact = useCallback(
    (name, phone, email) => {
        const newContact = [{
          id: Date.now(),
          name: name,
          phone: phone,
          email: email
        }];

        if(contacts.length === 0) return setContacts(newContact);
        setContacts((prevContacts) => [...prevContacts, {id: Date.now(), name, phone, email}]);
    },
    [contacts]
  );

  const removeContact = useCallback(
    (removeContactId) => {
        const newContacts = contacts.filter((item)=>(
          item.id !== removeContactId
        ));

        setContacts(newContacts);
    },
    [contacts]
  );

  const addAppointment = useCallback(
    (appointmentInfo) => {
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        {
          id: Date.now(),
          name: appointmentInfo.name,
          contactSelect: appointmentInfo.contactSelect,
          date: appointmentInfo.date,
          time: appointmentInfo.time
        }
      ]);
    },
    []
  );

  const removeAppointment = useCallback(
    (removeAppointmentId) => {
        const newAppointments = appointments.filter((item)=>(
          item.id !== removeAppointmentId
        ));

        setAppointments(newAppointments);
    },
    [appointments]
  );

  return (
    <AppContext.Provider
      value={{ contacts, appointments, addAppointment, addContact, removeContact, removeAppointment }}
    >
      {children}
    </AppContext.Provider>
  );
};