import React from "react";

const Template1 = ({ data }) => {
  return (
    <div className="template1" key={data._id}>
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

export default Template1;

// import React from "react";

// const Template1 = ({ data }) => {
//   return (
//     <div className="template1" key={data._id}>
//       <div className="header">
//         <h1>{data.name}</h1>
//         <p>Email: {data.email}</p>
//         <p>Phone: {data.phone}</p>
//       </div>
//       <div className="profile">
//         <p>Profile: {data.profile}</p>
//         <p>{data.summary}</p>
//       </div>
//       <div className="skills">
//         <h2>Skills:</h2>
//         <ul>
//           {data.skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="experiences">
//         <h2>Experiences:</h2>
//         {data.experiences.map((experience) => (
//           <div key={experience._id}>
//             <p>Title: {experience.title}</p>
//             <p>Company: {experience.company}</p>
//             <p>
//               Start Date: {new Date(experience.startDate).toLocaleDateString()}
//             </p>
//             <p>End Date: {new Date(experience.endDate).toLocaleDateString()}</p>
//             <p>Description: {experience.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="education">
//         <h2>Education:</h2>
//         {data.education.map((education) => (
//           <div key={education._id}>
//             <p>Degree: {education.degree}</p>
//             <p>Institution: {education.institution}</p>
//             <p>
//               Graduation Date:
//               {new Date(education.graduationDate).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Template1;
