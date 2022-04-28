import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Ingredients = ({ meal }) => {
  console.log(meal);

  if (meal === "1") {
    return (
      <Card style={{ width: "83rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item variant="success">Рис</ListGroup.Item>
          <ListGroup.Item variant="warning">Морковь</ListGroup.Item>
          <ListGroup.Item variant="danger">Мясо</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  } else if (meal === "2") {
    return (
      <Card style={{ width: "83rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item variant="light">Тесто</ListGroup.Item>
          <ListGroup.Item variant="info">Мясо</ListGroup.Item>
          <ListGroup.Item variant="primary">Много мясо</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  } else if (meal === "3") {
    return (
      <Card style={{ width: "83rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">Тесто</ListGroup.Item>
          <ListGroup.Item variant="secondary">Мясо</ListGroup.Item>
          <ListGroup.Item variant="white">Много мясо</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
};

export default Ingredients;
