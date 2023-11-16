import React from "react";

const Template1 = ({ data }) => {
  return (
    <div className="template1">
      <div className="header">
        <h1>{data.name}</h1>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
      <div className="profile">
        <p>Profile: {data.profile}</p>
        <p>{data.summary}</p>
      </div>
      <div className="skills">
        <h2>Skills:</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="experiences">
        <h2>Experiences:</h2>
        {data.experiences.map((experience) => (
          <div key={experience._id}>
            <p>Title: {experience.title}</p>
            <p>Company: {experience.company}</p>
            <p>
              Start Date: {new Date(experience.startDate).toLocaleDateString()}
            </p>
            <p>End Date: {new Date(experience.endDate).toLocaleDateString()}</p>
            <p>Description: {experience.description}</p>
          </div>
        ))}
      </div>
      <div className="education">
        <h2>Education:</h2>
        {data.education.map((education) => (
          <div key={education._id}>
            <p>Degree: {education.degree}</p>
            <p>Institution: {education.institution}</p>
            <p>
              Graduation Date:
              {new Date(education.graduationDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
