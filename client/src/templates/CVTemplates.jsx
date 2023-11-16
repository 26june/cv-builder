import React, { useState, useEffect } from "react";
import axios from "axios";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import DraggableList from "./DraggableList";

function CVTemplates() {
  const [cvs, setCvs] = useState([]);
  const [order, setOrder] = useState({
    skills: [],
    experiences: [],
    education: [],
    references: [],
  });

  useEffect(() => {
    getCvs();
  }, []);

  async function getCvs() {
    const API = `http://localhost:8080/cvs`;
    const res = await axios.get(API);
    setCvs(res.data);

    // Initialize the order state with the default order
    setOrder({
      skills: res.data[0]?.skills.map((_, index) => index),
      experiences: res.data[0]?.experiences.map((_, index) => index),
      education: res.data[0]?.education.map((_, index) => index),
      references: res.data[0]?.references.map((_, index) => index),
    });
  }

  // Function to update the order when an item is dragged and dropped
  const moveItem = (section, oldIndex, newIndex) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [section]: arrayMove(prevOrder[section], oldIndex, newIndex),
    }));
  };

  return (
    <div>
      {cvs.map((cv) => (
        <div key={cv._id}>
          {/* DraggableList for Skills */}
          <DraggableList
            items={order.skills}
            moveItem={(oldIndex, newIndex) =>
              moveItem("skills", oldIndex, newIndex)
            }
            renderItem={(index) => <p key={index}>{cv.skills[index]}</p>}
          />
          {/* DraggableList for Experiences */}
          <DraggableList
            items={order.experiences}
            moveItem={(oldIndex, newIndex) =>
              moveItem("experiences", oldIndex, newIndex)
            }
            renderItem={(index) => (
              <Template1
                key={index}
                data={{ ...cv, experiences: [cv.experiences[index]] }}
              />
            )}
          />
          {/* DraggableList for Education */}
          <DraggableList
            items={order.education}
            moveItem={(oldIndex, newIndex) =>
              moveItem("education", oldIndex, newIndex)
            }
            renderItem={(index) => (
              <Template2
                key={index}
                data={{ ...cv, education: [cv.education[index]] }}
              />
            )}
          />
          {/* DraggableList for References */}
          <DraggableList
            items={order.references}
            moveItem={(oldIndex, newIndex) =>
              moveItem("references", oldIndex, newIndex)
            }
            renderItem={(index) => (
              <Template3
                key={index}
                data={{ ...cv, references: [cv.references[index]] }}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
}

export default CVTemplates;

// Add this utility function to move items in an array
function arrayMove(arr, oldIndex, newIndex) {
  const result = Array.from(arr);
  const [removed] = result.splice(oldIndex, 1);
  result.splice(newIndex, 0, removed);
  return result;
}

// import React, { useState } from "react";
// import axios from "axios";
// import Template1 from "./Template1";
// import Template2 from "./Template2";
// import Template3 from "./Template3";
// import DraggableList from "./DraggableList";

// function CVTemplates() {
//   const [cvs, setCvs] = useState([]);

//   const moveItem = (fromIndex, toIndex) => {
//     setCvs((prevCvs) => {
//       const updatedCvs = [...prevCvs];
//       const [movedItem] = updatedCvs.splice(fromIndex, 1);
//       updatedCvs.splice(toIndex, 0, movedItem);
//       return updatedCvs;
//     });
//   };

//   const renderTemplate = (cv) => (
//     <div key={cv._id}>
//       <Template1 data={cv} />
//       <Template2 data={cv} />
//       <Template3 data={cv} />
//     </div>
//   );

//   return (
//     <DraggableList
//       items={cvs}
//       moveItem={moveItem}
//       renderItem={renderTemplate}
//     />
//   );
// }

// export default CVTemplates;

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import Template1 from "./Template1";
// // import Template2 from "./Template2";
// // import Template3 from "./Template3";

// // function CVTemplates() {
// //   const [cvs, setCvs] = useState([]);

// //   useEffect(() => {
// //     getCvs();
// //   }, []);

// //   async function getCvs() {
// //     const API = `http://localhost:8080/cvs`;
// //     const res = await axios.get(API);
// //     setCvs(res.data);
// //   }

// //   return (
// //     <div>
// //       {cvs.map((cv) => (
// //         <div key={cv._id}>
// //           <Template1 data={cv} />
// //           <Template2 data={cv} />
// //           <Template3 data={cv} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default CVTemplates;
