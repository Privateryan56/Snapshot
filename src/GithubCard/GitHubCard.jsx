import React from "react";
import Card from "react-bootstrap/Card";

const GitHubCard = () => {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./Char.jpg" />
        <Card.Body>
          <Card.Title>Char Aznable</Card.Title>
          <Card.Text>MY name is Char Aznable, I am the Red Comet</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GitHubCard;