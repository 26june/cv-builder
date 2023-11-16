import { useState, useEffect } from "react";
import axios from "axios";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";

function CVTemplates() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    getCvs();
  }, []);

  async function getCvs() {
    const API = `http://localhost:8080/cvs`;
    const res = await axios.get(API);
    setCvs(res.data);
  }

  return (
    <div>
      {cvs.map((cv) => (
        <div key={cv._id}>
          <Template1 data={cv} />
          <Template2 data={cv} />
          <Template3 data={cv} />
        </div>
      ))}
    </div>
  );
}

export default CVTemplates;
