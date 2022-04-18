import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div
      style={{ maxWidth: "800px", marginBottom: "300px", marginTop: "100px" }}
      className="mx-auto shadow"
    >
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 style={{ fontFamily: "cursive" }} className="text-dark">
              Difference between authorization and authentication
            </h3>{" "}
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ fontFamily: "monospace" }}>
              <li>
                In authentication process, the identity of users are checked for
                providing the access to the system.
              </li>
              <li>
                While in authorization process, person's or user's authorities
                are checked for accessing the resources.
              </li>
              <li>In authentication process, users or persons are verified.</li>
              <li>While in this process, users or persons are validated.</li>
              <li>It is done before the authorization process.</li>
              <li>
                While this process is done after the authentication process.
              </li>
              <li>It needs usually user's login details.</li>
              <li>While it needs user's privilege or security levels.</li>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 style={{ fontFamily: "cursive" }} className="text-dark">
              {" "}
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ fontFamily: "monospace" }}>
                <p className="fw-bold">Why firebase?</p>
               <li>Easy to use.</li> 
               <li>Implementation process is very easy.</li>
               <li>Well secured.</li>
              <li>
                Firebase helps you develop high-quality apps, grow your user
                base, and earn more money. Each feature works independently, and
                they work even better together.
              </li>
              <li>
                Allow users to sign in to your app with their Facebook, Twitter,
                Google, or GitHub account.
              </li>
              <li>
                Firebase security rules work with the Realtime Database to
                ensure only the individuals that users share a photo with can
                view it.
              </li>
              <p className="fw-bold mt-3">Firebase alternatives:</p>
              <li>Parse</li>
              <li>Back4App</li>
              <li>Aws Amplify</li>
              <li>Kuzzle</li>
              <li>NativeScript</li>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 style={{ fontFamily: "cursive" }} className="text-dark">
              {" "}
              What other services does firebase provide other than
              authentication?{" "}
            </h3>
          </Accordion.Header>
          <Accordion.Body>
          <div style={{ fontFamily: "monospace" }}>
              <p className="fw-bold">Firebase other services:</p>
              <li>Firebase Hosting</li>
              <li>Cloud Storage for Firebase</li>
              <li>Analytics </li>
              <li>Cloud messaging</li>
              <li>Realtime database</li>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
