import React from "react";

function BioData(props) {

    const {name,email,phone,skills,interests}=props
  return (
    <>
      <h2>Bio Data Simple Practice</h2>
      <div className="bio-data">
        <div className="personal-info">
          <h2>BioData of {name}</h2>
          <p>
            <strong>Email:</strong>
            {email}
          </p>
          <p>
            <strong>Phone:</strong>
            {phone}
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h2>My interest:</h2>
          <ul>
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
        <hr /> <hr />
      </div>
    </>
  );
}

export default BioData;
