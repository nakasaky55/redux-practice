import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import CandidateCard from "../components/CandidateCard";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  FormControl,
  Dropdown,
  InputGroup,
  Button
} from "react-bootstrap";

import { Prompt } from "react-router-dom";

export default function CurrentCandidate() {
  let { id } = useParams();
  const [current, setCurrent] = useState([]);

  const [isANan, setIsANan] = useState(isNaN(parseInt(id)));

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    console.log(form.checkValidity());
    setValidated(true);
  };

  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch(`http://localhost:3001/data/${id}`);
      const data = await response.json();
      if (response.status === 200) {
        setCurrent(data);
      } else setIsANan(true);
    };
    getCandidates();
  }, [isANan === false]);

  const putCandidate = async e => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/data/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(current)
    });
  };
console.log("current", current)
  return (
    <Container>
      <h1>Current candidate</h1>
      {isANan ? (
        <h2>Candidate not found</h2>
      ) : (
        <Row>
          <Col lg={4} key={current.id}>
            <Card>
              <Card.Img variant="top" src={current.photo_url} />
              <Card.Body>
                <Card.Title>
                  {current.first_name + " " + current.last_name}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{current.email}</ListGroupItem>
                <ListGroupItem>{current.company}</ListGroupItem>
                <ListGroupItem>{current.job_title}</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8}>
            <Form
              className="edit-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    value={current.first_name}
                    onChange={e =>
                      setCurrent({ ...current, first_name: e.target.value })
                    }
                    // onChange={(e) => console.log(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    value={current.last_name}
                    onChange={e =>
                      setCurrent({ ...current, last_name: e.target.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      aria-describedby="inputGroupPrepend"
                      required
                      value={current.email}
                      onChange={e =>
                        setCurrent({ ...current, email: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a correct email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomCompany">
                  <Form.Label>Company</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                      value={current.company}
                      onChange={e =>
                        setCurrent({ ...current, company: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your Company
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustomCity">
                  <Form.Label>City</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                      value={current.city}
                      onChange={e => {
                        setCurrent({ ...current, city: e.target.value });
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your city
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomCountry">
                  <Form.Label>Country</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                      value={current.country}
                      onChange={e => {
                        setCurrent({ ...current, country: e.target.value });
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your country
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Button
                type="submit"
                onClick={e => {
                //   e.preventDefault();
                  putCandidate(e);
                }}
              >
                Submit form
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}
