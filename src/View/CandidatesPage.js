import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import { Container, Row } from "react-bootstrap";

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  console.table(candidates);
  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch("http://localhost:3001/data");
      const data = await response.json();
      setCandidates(data);
    };
    getCandidates();
  }, []);

  //delete a candidate
  const onDeleteCandidate = (e, id) => {
    e.preventDefault();
    const config = {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3001/data/${id}`, config);
    const newCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(newCandidates);
  };

  return (
    <Container>
      <h1>Candidates information</h1>
      <Row>
        {candidates.map(item => {
          return <CandidateCard data={item} onDeleteCandidate={onDeleteCandidate} />;
        })}
      </Row>
    </Container>
  );
}
