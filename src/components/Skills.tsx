import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Container,
} from "react-bootstrap";

function Skills() {
  return (
    <section id='skills'>
      <Container className='p-0'>
        <CardGroup className='shadow' id='skillsCardGroup'>
          <Card className='d-flex justify-content-center align-items-center border-start-0'>
            <CardHeader className='icon-bg rounded-circle d-flex justify-content-center align-items-center mt-5'>
              <i className='fa-solid fa-code fa-2xl'></i>
            </CardHeader>
            <CardBody>
              <h5 className='card-title text-center mt-3'>
                Frontend Development
              </h5>
              <p className='card-text px-5 pt-4'>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <h6 className='text-purple text-center mt-5'>
                Languages I speak:
              </h6>
              <p className='text-center'>HTML, Pug, Slim, CSS, Sass, Git</p>
              <h6 className='text-purple text-center mt-5'>Dev Tools:</h6>
              <ul className='text-center list-unstyled'>
                <li>Atom</li>
                <li>Bitbucket</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Codekit</li>
                <li>Github</li>
                <li>Surge</li>
                <li>Terminal</li>
                <li>Vercel</li>
              </ul>
            </CardBody>
          </Card>
          <Card className='d-flex justify-content-center align-items-center border-start-0'>
            <CardHeader className='icon-bg rounded-circle d-flex justify-content-center align-items-center mt-5'>
              <i className='fa-solid fa-terminal fa-2xl'></i>
            </CardHeader>
            <CardBody>
              <h5 className='card-title text-center mt-3'>Designer</h5>
              <p className='card-text px-5 pt-4'>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <h6 className='text-purple text-center mt-5'>
                Things I enjoy designing:
              </h6>
              <p className='text-center'>UX, UI, Web, Apps, Logos</p>
              <h6 className='text-purple text-center mt-5'>Design Tools:</h6>
              <ul className='text-center list-unstyled'>
                <li>Affinity Designer</li>
                <li>Figma</li>
                <li>Font Awesome</li>
                <li>Pen & Paper</li>
                <li>Sketch</li>
                <li>Webflow</li>
              </ul>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
}
export default Skills;
