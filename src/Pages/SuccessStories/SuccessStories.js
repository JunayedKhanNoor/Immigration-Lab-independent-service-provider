import React, { useEffect, useState, useTransition } from "react";
import { config, useSpring, animated, NUM_TRANS } from "react-spring";
import success from "../../Images/Banner/success.jpg";
const SuccessStories = () => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    from: { number: 0 },
    number: 5,
    delay: 1000,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  return (
    <div>
      <img
        style={{
          maxHeight: "600px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "600px",
        }}
        src={success}
        alt=""
      />
      <h1
        style={{
          color: "#fff",
          background: "#F55353",
          fontFamily: "monospace",
        }}
        className="text-center fw-bold shadow my-4 py-5"
      >
        Our Success Stories
      </h1>
      <div
        style={{ background: "#143F6B", color: "#F55353" }}
        className="d-md-flex py-5 justify-content-around align-items-center"
      >
        <div>
          <h1>
            <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>
          </h1>
          <h3>Year of Experience</h3>
        </div>
        <div>
          <h1>1000+</h1>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <h1>90%</h1>
          <h3>Visa Success Rate</h3>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1000px",
          marginBottom: "100px",
          marginTop: "100px",
          fontFamily: "sans-serif",
          lineHeight:'2em',
          wordSpacing:'2px'
        }}
        className="mx-auto border rounded text-center p-5 shadow"
      >
        <h1>Why Choose an Immigration Consultant?</h1>
        <p>
          Are you required to use an immigration consultant in your Canadian
          Immigration application? The answer is “no” according to Citizenship
          and Immigration. All the immigration forms are online for your access
          and you do not need to hire an immigration representative. The
          decision of hiring an immigration professional is up to the applicant
          himself or herself. Then, why should anyone choose to retain the
          service of a registered immigration consultant?{" "}
        </p>
        <h3>
          1. Consultant can assist you with choosing the “best” option for your
          situation
        </h3>
        <p>
          Do you know that there are more than 60 Canadian immigration programs?
          Do you also know that you can change your status during your stay in
          Canada? There are also many ways for you to apply for a work visa.
          Everyone's situation is unique and there is no absolute best option. A
          Registered immigration consultant who understands different
          immigration or visa programs will assist you choosing a “better
          option” for your particular situation.
        </p>
        <h3>
          2. You are assured that your file is presented in an organized and
          complete way
        </h3>
        <p>
          Immigration application is a serious matter and details matter the
          most. Do you know that if you submit your application forms with
          information you are not sure of, or you leave some questions blank
          will lead to your file being rejected or sent back to you for
          reapplication? A certified immigration consultant has a qualified high
          level of details and organization skill to make sure that your
          information is complete and your case will be presented to immigration
          officers in an organized way for their easy processing. A detailed
          submission letter will also be sent along with your application to
          make a good impression for your case.
        </p>
        <h3>3. Consultant will make the complicated process simpler for you</h3>
        <p>
          Immigration is a complicated process. It is not only because of
          complex Canadian immigration legal system. It is also the extent of
          your financial and emotional commitment to come and establish in a new
          country. With the immigration law knowledge and the local knowledge of
          Canadian society, a registered immigration consultant will guide you
          through the process and make the complicated process simpler for you.
        </p>
        <h3>4. Consultant will save your valuable time</h3>
        <p>
          Even for the simplest immigration cases, with all the forms and
          instruction guide online, not everyone has the time to invest in
          analyzing the instruction, filling the forms and preparing the
          documentations for submission. Sometimes, even a simple case can use
          someone up to a few days of time with no 100% understanding of the
          requirement and rules. If you send an incomplete application or miss
          certain details, you case might be returned to you without any refund
          and you have to send the package again. A Registered immigration
          consultant already has all the resources ready in the office and will
          guide you in a prompt and efficient manner. He or she does the
          thinking and doing for you, so your valuable time can be saved for
          something more meaningful to you.
        </p>
      </div>
    </div>
  );
};

export default SuccessStories;
