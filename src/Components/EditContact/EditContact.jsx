import React, { useContext, useEffect, useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { contentsContext } from "../../Context/ContactContext";

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(contentsContext);
  const [editContact, setEditContact] = useState(contactToEdit);
  const navigate = useNavigate();

  useEffect(() => {
    setEditContact(contactToEdit);
  }, [contactToEdit]);

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };
  console.log(editContact);

  return (
    <div className="bg-warning border border-dark p-1 d-flex justify-content-center">
      {editContact ? (
        <InputGroup className="w-50">
          <FormControl
            value={editContact.name}
            name="name"
            placeholder="enter name"
            onChange={handleInp}
          ></FormControl>
          <FormControl
            value={editContact.phone}
            name="phone"
            placeholder="enter phone"
            onChange={handleInp}
          ></FormControl>
          <FormControl
            value={editContact.email}
            name="email"
            placeholder="enter email"
            onChange={handleInp}
          ></FormControl>
          <FormControl
            value={editContact.img}
            name="img"
            placeholder="enter img"
            onChange={handleInp}
          ></FormControl>
          <Button
            onClick={() => {
              saveContact(editContact);
              navigate("/");
            }}
          >
            SAVE
          </Button>
        </InputGroup>
      ) : (
        <h3>Loading...........</h3>
      )}
    </div>
  );
};

export default EditContact;
