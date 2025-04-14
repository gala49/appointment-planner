import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} >
                Kontakty
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                Schůzky
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;