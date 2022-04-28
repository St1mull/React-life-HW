import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
    email: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let obj = {
      ...password,
      [e.target.name]: e.target.value,
    };
    setPassword(obj);
  };

  const changeStatus = () => {
    if (password.password1 === password.password2) {
      setIsLogin(!isLogin);
    } else {
      checkPassword();
    }
  };

  const checkPassword = () => {
    if (password.password1 !== password.password2) {
      setText("Пароли не совпадают");
    } else {
      setText("");
    }
  };

  useEffect(() => {
    checkPassword();
  }, [password]);

  return isLogin ? (
    <div>
      <h3>Welcome {password.email}</h3>{" "}
      <Button variant="danger" onClick={changeStatus}>
        Выйти
      </Button>
    </div>
  ) : (
    <div>
      <Form className="my-5">
        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={password.email}
            placeholder="Введите почту"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password.password1}
            name="password1"
            onChange={handleChange}
            placeholder="введите пароль"
          />
        </Form.Group>

        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput3">
          <Form.Label>Repeat your Password</Form.Label>
          <Form.Control
            type="password"
            value={password.password2}
            onChange={handleChange}
            name="password2"
            placeholder="подтвердите пароль"
          />
          <Form.Label>{text}</Form.Label>
        </Form.Group>
        <Button className="mx-3" variant="warning" onClick={changeStatus}>
          Войти
        </Button>
        <Button variant="danger">Выйти</Button>
      </Form>
    </div>
  );
};

export default Login;
