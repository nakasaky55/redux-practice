import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const currentUser = useSelector(state => state);
  const history = useHistory();
  console.log(currentUser);
  return (
    <Container className="custom-container">
      {currentUser.isLoggedIn ? (
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/54522429_2230267997029893_774085035249631232_n.jpg?_nc_cat=100&cachebreaker=sd&_nc_oc=AQlueBR3ovO-BoR6e8bNpDf8H0DpSDe_LZqj_XTYVivGKqPWEWk5NG6lV_3NVlFr1Xg&_nc_ht=scontent.fsgn4-1.fna&oh=63cdf59aa787c1b5cdfee182043d5141&oe=5E5DD11F"
              />
              <Card.Body>
                <Card.Title>Your profile</Card.Title>
                <Card.Text>Your name is {currentUser.name}</Card.Text>
                <Card.Text>Age: {currentUser.age}</Card.Text>
                <Card.Text>Hobbies: {currentUser.hobby}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}></Col>
        </Row>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>You're not logged in</div>
          <div
            style={{ textAlign: "center" }}
            onClick={() => history.push("/")}
          >
            <Button variant="outline-primary">Log in</Button>
          </div>
        </>
      )}
    </Container>
  );
}
