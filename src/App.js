import React, { useMemo } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
            <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
          </Route>
        )
      ),
    []
  );
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
