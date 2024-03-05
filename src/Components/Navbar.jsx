import React, { useEffect, useRef } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import JavaLogo from '../Images/java-logo.png'
import HtmlLogo from '../Images/html-logo.png'
import BootstrapLogo from '../Images/bootstrap-logo.png'
import JsLogo from '../Images/javascript-logo.png'
import RtLogo from '../Images/react-logo.png'
import FLogo from '../Images/Firoz.logo2-removebg-preview.png'

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      switch (window.location.hash) {
        case '#Home':
          scrollToSection(homeRef);
          break;
        case '#About':
          scrollToSection(aboutRef);
          break;
        case '#Education':
          scrollToSection(educationRef);
          break;
        case '#Project':
          scrollToSection(projectRef);
          break;
        case '#Contact':
          scrollToSection(contactRef);
          break;
        default:
          break;
      }
    };

    // Listen for hash changes and scroll to the corresponding section
    window.addEventListener('hashchange', handleHashChange);

    // Scroll to the appropriate section when the component mounts
    handleHashChange();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className='container-fluid'>
      <header className="Head-File">
        <div className="Grid-1">
        <Link to="/" className="BHAR-Name center ">
          <h1 className="NAME-BH"><img height={100} width={100} alt='Firoz-logo2.png' src={FLogo}/></h1>
        </Link>
        </div>
        <div className="Grid-2">
          <input id="menuTrigger" type="checkbox" className="nav_I" />
          <label htmlFor="menuTrigger" className="nav_ico"><i className="fa fa-bars"></i></label>
          <nav className="Header-Files">
            <Link to="#Home" className="NAV-Items a" onClick={() => scrollToSection(homeRef)}>Home</Link>
            <Link to="#About" className="NAV-Items b" onClick={() => scrollToSection(aboutRef)}>About</Link>
            <Link to="#Education" className="NAV-Items c" onClick={() => scrollToSection(educationRef)}>Education</Link>
            <Link to="#Project" className="NAV-Items d" onClick={() => scrollToSection(projectRef)}>Projects</Link>
            <Link to="#Contact" className="NAV-Items e" onClick={() => scrollToSection(contactRef)}>Contact</Link>
          </nav>
        </div>
      </header>

      <div id="Home" ref={homeRef} className="center-slide-in">
      <div id="Home">
      <div className="Details-Grid-First-Text">
  <div className="Name-Grid-BH animate-bounce">
    <h1 className="Name-BH">I'M Shaik Mahammad Khaja Firoz</h1>
  </div>
  <div className="Design-Grid">
    <h2 className="Design">A Web Developer</h2>
  </div>
  <div className="Address-Grid">
    <h3 className="Address-Name">From Andhra Pradesh, India</h3>
  </div>
</div>

        <br /><br />
      <h2 className="Tech-slide">Technical Skills</h2>
      <div className="row Tech-slide">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <div className="card h-200">
            <img src={JavaLogo}  className="card-img-top" alt="Technical Skill 1" />
            <div className="card-body">
              <h5 className="card-title">Core Java</h5>
              <p className="card-text">Description about Core Java.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-200">
            <img src={HtmlLogo} className="card-img-top" alt="Technical Skill 2" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">Description about HTML.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-200">
            <img src={BootstrapLogo}  className="card-img-top" alt="Technical Skill 3" />
            <div className="card-body">
              <h5 className="card-title">CSS with Bootstrap</h5>
              <p className="card-text">Description about CSS with Bootstrap.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-200">
            <img src={JsLogo} className="card-img-top" alt="Technical Skill 3" />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">Description about Javascript.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-200">
            <img src={RtLogo}  className="card-img-top" alt="Technical Skill 3" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">Description about React.js.</p>
            </div>
          </div>
        </div>
        {/* Add more cards for additional technical skills */}
      </div>   
      
    </div>
      </div>

      <div id="About" ref={aboutRef}>
        <h2>About</h2>
          <p>I am a recent graduate with a B.Tech From SRM Institute of Science & Technology. My technical skills include Core Java, HTML, CSS with Bootstrap, JavaScript, and React.js. I have practical experience gained during internships and academic projects, including a successful 6-month internship at Siemens.</p>
      </div>

      <div id="Education" ref={educationRef}>
        <h2>Education</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">College Name</th>
              <th scope="col">Course Name</th>
              <th scope="col">Passed out Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>SRMIST</td>
              <td>Computer Science & Engg</td>
              <td>2023</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sri Chaitanya Jr.College</td>
              <td>MPC</td>
              <td>2019</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bhashyam</td>
              <td>SSC</td>
              <td>2017</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="Project" ref={projectRef}>
          <h2>Projects</h2>
     <ul>
      <li>"Zibber" - Description of the project goes here.</li>
      <li>"Generic Engine Market Module" - Description of the project goes here.</li>
     </ul>
      </div>

      <form>
        <h2>Contact</h2>
        <div className="container" id='Contact' ref={contactRef}>       
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card transparent-card">
                <div className="card-body">
                  <h4 className="card-header bg-primary">Contact Page</h4>
                  <div className="card-body form-group">
                    <label>Username:*</label>
                    <input type="email" className="form-control" required /> <br />
                    <label>Password:*</label>
                    <input type="password" className="form-control" required /> <br />
                    <label>MobileNo:*</label>
                    <input type="number" className="form-control" required /> <br />
                    <label>Comments:</label>
                    <input type="text" className="form-control" placeholder="Give your feedback" /><br />
                    <button className="btn btn-success" maxLength="10">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Navbar;