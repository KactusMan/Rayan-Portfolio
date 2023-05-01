import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Turtle from "../../Assets/Projects/turtle.png";

import chatify from "../../Assets/Projects/chatify.png";

import Superwall from "../../Assets/Projects/superwall.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Turtle}
              isBlog={false}
              title="TeachEmTurtles"
              description="A minting DAPP and a fully responsive website build with React.js, Material-UI and Tailwind Css. Have features which allows user to mint when the project goes live, integrated with the fully functional smart contract in the backend."
              
              demoLink="https://www.teachemturtles.io/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Superwall}
              isBlog={false}
              title="SuperWall"
              description="Worked Collaboratively with a group of professionals into making this huge scale website with the help of React.js, Tailwind Css, Email.js, React Routers and AOS"
              
              demoLink="https://superwall.vercel.app/"
            />
          </Col>

   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              
              demoLink="https://chatify-49.web.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
