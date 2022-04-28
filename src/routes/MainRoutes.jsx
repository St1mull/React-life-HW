import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContacts from "../Components/AddContacts/AddContacts";
import ContactsList from "../Components/ContactsList/ContactsList";
import Counter from "../Components/Counter/Counter";
import EditContact from "../Components/EditContact/EditContact";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";

import Receipts from "../Components/Receipts/Receipts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addcontacts" element={<AddContacts />}></Route>
      <Route path="/contactslist" element={<ContactsList />}></Route>
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
