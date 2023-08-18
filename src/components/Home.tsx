import Container from "react-bootstrap/Container";
import avatarImg from "../assets/jm-avatar.svg";
import devicesImg from "../assets/devices.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container fluid className="px-0 pt-5 mt-5">
      <section className="mt-5" id="introSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Frontend, Backend, Full Stack Developer</h1>
              <p className="lead">
                I design and code beautifully simple things, and I love what I
                do.
              </p>
              <img className="my-5" src={avatarImg} alt="Avatar of myself" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <img
                className="mt-5 img-fluid"
                src={devicesImg}
                alt="Image of electronic devices"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 purple-bg-color h-65 mb-5">
        <div className="container pb-5">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="col-lg-7 text-center">
              <h3 className="mt-5">
                Hi there, my name is Juan. Nice to meet you.
              </h3>
              <p className="lead mt-5 ">
                Since beginning my journey as a freelance designer over 11 years
                ago, I've done remote work for agencies, consulted for startups,
                and collaborated with talented people to create digital products
                for both business and consumer use. I'm quietly confident,
                naturally curious, and perpetually working on improving my chops
                one design problem at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skillSection">
        <div className="container-fluid shadow-lg">
          <div className="card-group">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="icon-bg rounded-circle d-flex justify-content-center align-items-center mt-5">
                <i className="fa-solid fa-terminal fa-2xl"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-3">Designer</h5>
                <p className="card-text px-5 pt-4">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <h6 className="text-purple text-center mt-5">
                  Things I enjoy designing:
                </h6>
                <p className="text-center">UX, UI, Web, Apps, Logos</p>
                <h6 className="text-purple text-center mt-5">Design Tools:</h6>
                <ul className="text-center list-unstyled">
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </div>
            </div>

            <div className="card d-flex justify-content-center align-items-center">
              <div className="icon-bg rounded-circle d-flex justify-content-center align-items-center mt-5">
                <i className="fa-solid fa-code fa-2xl"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Frontend Development
                </h5>
                <p className="card-text px-5 pt-4">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <h6 className="text-purple text-center mt-5">
                  Languages I speak:
                </h6>
                <p className="text-center">HTML, Pug, Slim, CSS, Sass, Git</p>
                <h6 className="text-purple text-center mt-5">Dev Tools:</h6>
                <ul className="text-center list-unstyled">
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
              </div>
            </div>

            <div className="card d-flex justify-content-center align-items-center">
              <div className="icon-bg rounded-circle d-flex justify-content-center align-items-center mt-5">
                <i className="fa-solid fa-book fa-2xl"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-3">Mentor</h5>
                <p className="card-text px-5 pt-4">
                  I genuinely care about people, and love helping fellow
                  designers work on their craft.
                </p>
                <h6 className="text-purple text-center mt-5">
                  Experiences I draw from:
                </h6>
                <p className="text-center">
                  UX/UI, Product design, Freelancing
                </p>
                <h6 className="text-purple text-center mt-5">Mentor Stats:</h6>
                <ul className="text-center list-unstyled">
                  <li>7 years experience</li>
                  <li>26 short courses</li>
                  <li>65 bootcamps</li>
                  <li>200+ students</li>
                  <li>2,350+ mentor sessions</li>
                  <li>60+ group critiques</li>
                  <li>16,500+ comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="callToAction" className="d-flex justify-content-center">
        <div className="box w-75 rounded position-relative d-flex justify-content-center flex-row align-items-center">
          <div className="row w-100">
            <div className="col-lg-4 text-center">
              <h1 className="text-white">Start a project</h1>
            </div>
            <div className="col-lg-4">
              <p className="text-white text-center">
                Interested in working together? We should queue up a time to
                chat. <span className="mint-text">I’ll buy the coffee.</span>
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <button
                className="btn btn-lg mint-btn-outline rounded-pill"
                onClick={() => navigate("/contact")}
              >
                <i className="fa-solid fa-handshake"></i> Let's do this
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
