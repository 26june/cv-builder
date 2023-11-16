import React from "react";

const Template1 = ({ data }) => {
  return (
    <div className="template1">
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Profile: {data.profile}</p>
      <h2>Skills:</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
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
  );
};

export default Template1;
