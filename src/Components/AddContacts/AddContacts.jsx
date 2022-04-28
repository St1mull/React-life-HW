import React, { useContext, useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { contentsContext } from "../../Context/ContactContext";

const AddContacts = () => {
  const { addContact } = useContext(contentsContext);
  const [person, setPerson] = useState({
    name: "",
    phone: "",
    email: "",
    img: "",
  });
  const handleInp = (e) => {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  };
  console.log(person);

  return (
    <div className="bg-warning border border-dark p-1 d-flex justify-content-center">
      <InputGroup className="w-50">
        <FormControl onChange={handleInp} placeholder="name" name="name" />
        <FormControl onChange={handleInp} placeholder="phone" name="phone" />
        <FormControl onChange={handleInp} placeholder="email" name="email" />
        <FormControl onChange={handleInp} placeholder="img" name="img" />
        <Button
          onClick={() => {
            addContact(person);
            setPerson({ name: "", phone: "", email: "", img: "" });
          }}
        >
          ADD
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddContacts;
