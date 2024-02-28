import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="animate__animated animate__fadeIn">Hi This is Shaik.Mahammad Khaja Firoz</h1>
      <h2 className="animate__animated animate__slideInLeft">Technical Skills</h2>
      <ul className="list-group">
        <li className="list-group-item animate__animated animate__slideInLeft">Core Java</li>
        <li className="list-group-item animate__animated animate__slideInLeft">HTML</li>
        <li className="list-group-item animate__animated animate__slideInLeft">CSS with Bootstrap</li>
        <li className="list-group-item animate__animated animate__slideInLeft">JavaScript</li>
        <li className="list-group-item animate__animated animate__slideInLeft">React.js</li>
      </ul>
      <h2 className="animate__animated animate__fadeIn">Experience</h2>
      <p className="animate__animated animate__fadeIn">
        During my 6-month internship at Siemens, I successfully developed a logic in Core Java for a submitter module,
        demonstrating my capability to work with complex systems and extract/save data between databases.
      </p>
    </div>
  );
};

export default Home;
