import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rayan Idrees </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a pursuing a bachelor's degree in IT from Sir Syed University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Plugging Ideas to your Brand!"{" "}
          </p>
          <footer className="blockquote-footer">Rayan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
