import React from "react";

const Template3 = ({ data }) => {
  return (
    <div className="template3">
      <div className="header">
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
      <div className="profile">
        <h2>Profile</h2>
        <p>{data.profile}</p>
        <h2>Summary</h2>
        <p>{data.summary}</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="experiences">
        <h2>Experiences</h2>
        {data.experiences.map((experience) => (
          <div key={experience._id}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>
              {new Date(experience.startDate).toLocaleDateString()} -{" "}
              {new Date(experience.endDate).toLocaleDateString()}
            </p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
      <div className="education">
        <h2>Education</h2>
        {data.education.map((edu) => (
          <div key={edu._id}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{new Date(edu.graduationDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <div className="references">
        <h2>References</h2>
        {data.references.map((ref) => (
          <div key={ref._id}>
            <p>{ref.name}</p>
            <p>{ref.email}</p>
            <p>{ref.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template3;
