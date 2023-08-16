import { Container } from "react-bootstrap";
import PDF from "./PDF";
import resumePart1 from "../assets/juan-molina-resume-1.jpg";
import resumePart2 from "../assets/juan-molina-resume-2.jpg";

function Resume() {
  return (
    <Container fluid className="appContainer d-flex justify-content-center">
      <PDF files={[resumePart1, resumePart2]} />
    </Container>
  );
}

export default Resume;
