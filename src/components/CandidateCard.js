import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserEdit, faCross, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CandidateCard(props) {
  const { data } = props;

  return (
    <Col lg={4} key={data.id}>
      <Card>
        <Card.Img variant="top" src={data.photo_url} />
        <Card.Body>
          <Card.Title>{data.first_name + " " + data.last_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{data.email}</ListGroupItem>
          <ListGroupItem>{data.company}</ListGroupItem>
          <ListGroupItem>{data.job_title}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {/* <Card.Link href={`/candidates/${candidate.id}`}>Edit</Card.Link> */}
          <Link to={`/candidates/${data.id}`} className="card-link">
            <FontAwesomeIcon icon={faUserEdit} />
            Profile
          </Link>
          <Card.Link
            onClick={e => props.onDeleteCandidate(e, data.id)}
            href={`/candidates/${data.id}`}
          >
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
