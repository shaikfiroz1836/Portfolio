import React, { useEffect, useRef } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

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
    <div>
      <header className="Head-File">
        <div className="Grid-1">
          <Link to="/" className="BHAR-Name">
            <h1 className="NAME-BH">Logo</h1>
          </Link>
        </div>
        <div className="Grid-2">
          <input id="menuTrigger" type="checkbox" className="nav_I" />
          <label htmlFor="menuTrigger" className="nav_ico"><i className="fa fa-bars"></i></label>
          <nav className="Header-Files">
            <Link to="#Home" className="NAV-Items a" onClick={() => scrollToSection(homeRef)}>Home</Link>
            <Link to="#About" className="NAV-Items b" onClick={() => scrollToSection(aboutRef)}>About</Link>
            <Link to="#Education" className="NAV-Items c" onClick={() => scrollToSection(educationRef)}>Education</Link>
            <Link to="#Project" className="NAV-Items c" onClick={() => scrollToSection(projectRef)}>Projects</Link>
            <Link to="#Contact" className="NAV-Items d" onClick={() => scrollToSection(contactRef)}>Contact</Link>
          </nav>
        </div>
      </header>

      <div id="Home" ref={homeRef}>
      <div id="Home">
      <h1 className="animate__animated animate__slideInLeft">Hi,This is Shaik.Mahammad Khaja Firoz i am a Web Developer</h1>
      <br /><br />
      <h2 className="animate__animated animate__slideInLeft">Technical Skills</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card h-100">
            <img src="./Images/java-logo.png" className="card-img-top" alt="Technical Skill 1" />
            <div className="card-body">
              <h5 className="card-title">Core Java</h5>
              <p className="card-text">Description about Core Java.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="your_image_path_or_url" className="card-img-top" alt="Technical Skill 2" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">Description about HTML.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="your_image_path_or_url" className="card-img-top" alt="Technical Skill 3" />
            <div className="card-body">
              <h5 className="card-title">CSS with Bootstrap</h5>
              <p className="card-text">Description about CSS with Bootstrap.</p>
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
    <p>
      B.Tech from SRM Institute of Science & Technology
    </p>
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