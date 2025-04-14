import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AppContext } from "../../context/AppContext";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { contacts, addAppointment } = useContext(AppContext);
  const today = getTodayString();

  const onSubmit = (data) => {
    if(data.name && data.contactSelect && data.date && data.time){
      addAppointment(data);
    }
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  
          type="text"
          placeholder="Název schůzky" 
          {...register("name", {
            required: "Název je povinný",
          })}
        />
        {errors.name && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.name.message}</p>}

        <select id="contact-select"
          {...register("contactSelect", {
            required: "Vyberte právě jednu osobu",
          })}
        >
          <option value="" hidden>Vyberte kontakt</option>
          {
            contacts.map((item)=>(
              <option key={item.id} value={item.name}>{item.name}</option>
            ))
          }
        </select>

        {errors.contactSelect && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.contactSelect.message}</p>}

        <input 
          type="date"
          placeholder="Datum"
          min={today}
          {...register("date", {
            required: "Vyberte datum schůzky",
          })}
        />

        {errors.date && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.date.message}</p>}

        <input 
          type="time"
          placeholder="Čas"
          min={today}
          {...register("time", {
            required: "Vyberte čas schůzky",
          })}
        />

        {errors.time && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.time.message}</p>}

        <input type="submit" value="Naplánovat schůzku"/>
      </form>
    </>
  );
};
