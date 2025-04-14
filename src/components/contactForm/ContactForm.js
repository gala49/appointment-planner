import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from "../../context/AppContext";

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { contacts, addContact } = useContext(AppContext);
  
  const onSubmit = (data) => {
    if(data.name && data.phone && data.email){
      addContact(data.name, data.phone, data.email);
    }
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  
          type="text"
          placeholder="Jméno" 
          {...register("name", {
            required: "Jméno je povinné",
            validate: (value) => {
              if(contacts.length === 0) return true;
              const exists = contacts.some(
                (contact) => contact.name.toLowerCase() === value.toLowerCase()
              );
              return !exists || "Toto jméno už existuje";
            }
          })}
        />
        {errors.name && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.name.message}</p>}

        <input 
          type="text"
          placeholder="Telefonní číslo" 
          {...register("phone", {
            required: "Telefon je povinný", 
            minLength: { value: 9, message: "Minimálně 9 znaků"}, 
            maxLength: { value: 12, message: "Maximálně 12 znaků" }
          })}
        />

        {errors.phone && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.phone.message}</p>}

        <input 
          type="text"
          placeholder="Email" 
          {...register("email", {
            required: "Email je povinný", 
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Neplatný formát emailu"
            }
          })}
        />

        {errors.email && <p style={{ marginTop: 0, color: 'darkRed'}}>{errors.email.message}</p>}

        <input type="submit" value="Uložit do kontaktů"/>
      </form>
    </>
  );
};