import React from "react";
import AddContacts from "../AddContacts/AddContacts";
import ContactsList from "../ContactsList/ContactsList";

const Home = () => {
  return (
    <>
      <AddContacts />
      <ContactsList />
    </>
  );
};

export default Home;
