import React from 'react';

const Home = () => {
  return (
    <div>
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
      <br /><br /><br />
      <h2 className="animate__animated animate__fadeIn">Experience</h2>
      <p className="animate__animated animate__fadeIn">
        During my 6-month internship at Siemens, I successfully developed a logic in Core Java for a submitter module,
        demonstrating my capability to work with complex systems and extract/save data between databases.
      </p>
    </div>
  );
};

export default Home;
