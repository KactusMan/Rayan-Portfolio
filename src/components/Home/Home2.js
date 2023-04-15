import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Web3.js and Tailwind   </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web 3 Development and AI 
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KactusMan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Kactus_Man1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rayan-idrees-435a56219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/umerkhan382"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour home-social-icons"
                >
                      <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjYsMjUuNikgc2NhbGUoMC44LDAuOCkiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjgsMjU2Yy03MC42OTI0NSwwIC0xMjgsLTU3LjMwNzU1IC0xMjgsLTEyOHYwYzAsLTcwLjY5MjQ1IDU3LjMwNzU1LC0xMjggMTI4LC0xMjh2MGM3MC42OTI0NSwwIDEyOCw1Ny4zMDc1NSAxMjgsMTI4djBjMCw3MC42OTI0NSAtNTcuMzA3NTUsMTI4IC0xMjgsMTI4eiIgaWQ9InNoYXBlIj48L3BhdGg+PC9nPjxnIGZpbGw9IiM3MDBjODYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLjg2LDIxLjMyMXYtMS41MzloLTIuOTE5bC0xLjI4MywtMC4wMjJjLTEuMDk3LDAgLTEuODQ3LDAuNzIyIC0yLjE0MSwxLjU2MXYtMS41MzloLTMuMjY5djkuOTc5aDMuMjY5di0yLjE0di0zLjMxMmMwLC0wLjk5NSAwLjgwNiwtMS44MDEgMS44MDEsLTEuODAxaDEuMjc0djcuMjUzaDMuMjY5di0yLjE0di0zLjMxMmMwLC0wLjk5NSAwLjgwNiwtMS44MDEgMS44MDEsLTEuODAxaDEuNjIzdi0yLjcyNmwtMS4yODMsLTAuMDIyYy0xLjA5NywtMC4wMDEgLTEuODQ2LDAuNzIyIC0yLjE0MiwxLjU2MXpNMTguNTk3LDE5Ljk5MWwtMS43NTQsNS43NjdsLTEuNzU0LC01Ljc2N2gtMy4yNjlsMy41NTEsOS45NzloMC4xOTFoMi41NjJoMC4xOTFsMy41NTEsLTkuOTc5ek01LjIzOSwxOS45OTF2LTAuNjY1YzAsLTAuNTgzIDAuNDcyLC0xLjA1NSAxLjA1NSwtMS4wNTVoMi4wNjR2LTIuNzM3aC0yLjgzNWMtMS45NjIsMCAtMy41NTMsMS41OTEgLTMuNTUzLDMuNTUzdjAuOTA1aC0xLjkxMXYyLjY0NWgxLjkxMXY3LjMzNGgzLjI3di03LjMzNGgzLjExOHY3LjMzNGgzLjI2OXYtNy4zMzR2LTIuNjQ1aC0zLjI2OWgtMy4xMTl6TTI2LjM5OCwxOS44NTdoLTAuMzk4Yy0yLjY3OCwwIC00Ljg0OSwyLjE3MSAtNC44NDksNC44NDl2MC41NDhjMCwyLjY3OCAyLjE3MSw0Ljg0OSA0Ljg0OSw0Ljg0OWgwLjg4NWMxLjgzNCwwIDMuNDAzLC0xLjEzMiA0LjA0OCwtMi43MzVsLTIuODg0LC0wLjg0MmMwLDAgLTAuMzQ1LDAuOTg4IC0xLjU0OCwwLjk4OGMtMS4zNTgsMCAtMi4wNzcsLTAuNzQ0IC0yLjE3MiwtMS41ODZoLTAuMDAxdi0wLjAwNWMtMC4wMDcsLTAuMDYxIC0wLjAxLC0wLjEyMyAtMC4wMSwtMC4xODVoMy42ODhoMy4yNDJ2LTEuMDMyYzAsLTIuNjc4IC0yLjE3MSwtNC44NDkgLTQuODUsLTQuODQ5ek0yNC4zMjIsMjMuODE0YzAuMDM5LC0wLjg5NyAwLjc3NywtMS42MTMgMS42ODQsLTEuNjEzaDAuMzEyYzAuOTA3LDAgMS42NDUsMC43MTYgMS42ODQsMS42MTN6TTQ3LjkzMiwyNi4xMzZjLTEuMTIzLDAgLTIuMDMzLDAuOTEgLTIuMDMzLDIuMDMzYzAsMS4xMjMgMC45MSwyLjAzMyAyLjAzMywyLjAzM2MxLjEyMywwIDIuMDMzLC0wLjkxIDIuMDMzLC0yLjAzM2MtMC4wMDEsLTEuMTIzIC0wLjkxLC0yLjAzMyAtMi4wMzMsLTIuMDMzeiI+PC9wYXRoPjwvZz48L2c+PC9nPgo8L3N2Zz4="/>
              
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
