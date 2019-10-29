import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function Homepage() {
  const currentUser = useSelector(state => state);

  console.log("hompage", currentUser);
  return (
    <Jumbotron>
      <h1>
        Hello,{" "}
        {currentUser.username === "anhkhoa"
          ? "Nguyen Anh Khoa"
          : currentUser.username}
        !
      </h1>
      <p>
        {currentUser.isLoggedIn
          ? "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          : "You're not logged in"}
      </p>
      <p>
        {currentUser.isLoggedIn ? (
          <Button variant="primary">Learn more</Button>
        ) : (
          <Link to="/" className="btn btn-dark" variant="dark">Log in</Link>
        )}
      </p>
    </Jumbotron>
  );
}
