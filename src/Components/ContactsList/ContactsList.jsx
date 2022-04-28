import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contentsContext } from "../../Context/ContactContext";

const ContactsList = () => {
  const { contacts, getContacts, deleteContacts, editContact } =
    useContext(contentsContext);
  useEffect(() => {
    getContacts();
  }, []);
  console.log(contacts);

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {contacts.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }} className="m-3">
          <Card.Body>
            <Card.Title>Name: {item.name} </Card.Title>
            <Card.Subtitle className="my-3 text-muted">
              Phone: {item.phone}
            </Card.Subtitle>
            <Card.Subtitle className="my-2">Email: {item.email}</Card.Subtitle>
            <Card.Subtitle className="my-2">
              <img src={item.img} alt="" />
            </Card.Subtitle>

            <Button variant="danger" onClick={() => deleteContacts(item.id)}>
              Delete
            </Button>
            <Link to="edit">
              <Button variant="warning" onClick={() => editContact(item.id)}>
                Edit
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactsList;
