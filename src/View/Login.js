import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const state = useSelector(state => state.isLoggedIn);

  if(state){
      history.push("/profile")
  }
  console.log("curr", currentUser);
  const submit = e => {
    e.preventDefault();
    dispatch({
      type: "SIGN_IN",
      data: {
        username: currentUser.username,
        isLoggedIn: true,
        name: "khoa",
        hobby:"game, music",
        age: "24"
      }
    });
    history.push("/home");
  };
  return (
    <Container className="custom-container">
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}>
          <Form onSubmit={submit}>
            <Form.Group
              controlId="formBasicEmail"
              onChange={e =>
                setCurrentUser({ ...currentUser, username: e.target.value })
              }
            >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
              <Form.Text className="text-muted">
                This field is mandatory.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                This field is mandatory.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
}
