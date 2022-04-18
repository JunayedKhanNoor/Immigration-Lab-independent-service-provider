import React from "react";
import profilePic from "../../Images/my/JUNAYED_.jpg";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        marginBottom: "300px",
        marginTop: "100px",
        fontFamily: "monospace",
      }}
      className="mx-auto border rounded text-center p-5 shadow"
    >
      <div>
        <img style={{height:'250px'}} className="rounded-circle img-fluid my-3" src={profilePic} alt="" />
      </div>
      <h1>Mohammad Junayed Khan Noor</h1>
      <h3>Green University of bangladesh</h3>
      <h3>CSE Department</h3>
      <p>
        <span className="fw-bold fs-4">My Goal:</span> InshAllah, I will
        complete programming hero web development course on time after that I
        will focus other opportunities provided by Programming Hero and also
        take preparation for Job interview and keep searching Job and keep
        applying. I will also focus on backend development, problem solving in
        LeetCode and also keep trying to improve skill as a frontend developer.
      </p>
    </div>
  );
};

export default About;
