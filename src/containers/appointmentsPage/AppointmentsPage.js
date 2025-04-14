import React, { useContext } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { AppContext } from "../../context/AppContext";

export const AppointmentsPage = () => {
  const { appointments } = useContext(AppContext);

  return (
    <div>
      <section>
        <h2>Přidat schůzku</h2>
        <AppointmentForm />
      </section>
      <hr />
      <section>
        <h2>Naplánované schůzky</h2>
        { 
          appointments.length > 0 ? (
            <TileList name="appointment-tilelist"/>
          ) : (
            <p>Zatím nejsou naplánovány žádné schůzky</p>
        )}
      </section>
    </div>
  );
};