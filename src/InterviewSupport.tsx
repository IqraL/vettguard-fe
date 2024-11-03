import React from "react";
import "./InterviewSupport.css";

export const InterviewSupport = () => {
  return (
    <div className="container">
      <p className="intro">
        Don’t want to waste developers' time or just not enough time in an
        interview for vetting all of the candidates' technical skills?
      </p>
      <p className="message">
        We understand that, given the constraints of interview time, it can be
        challenging to cover all technical skills extensively. To help bridge
        this gap, we’re offering a solution to conduct thorough technical
        interviews on your behalf.
      </p>

      <h3>Here’s how we can support:</h3>
      <ul className="support-list">
        <li>
          <strong>Comprehensive Technical Interviews:</strong> We conduct
          in-depth interviews to evaluate all of the candidate’s listed
          technical skills, providing you with confidence that no key areas are
          left unassessed.
        </li>
        <li>
          <strong>Detailed Feedback Reports:</strong> After each technical
          interview, we provide an extensive report detailing the candidate's
          performance on each skill, allowing you to have a clear view of their
          strengths and any areas for improvement.
        </li>
        <li>
          <strong>Handling Complex Skill Assessments:</strong> We cover areas
          that may be difficult to address due to time constraints or highly
          specialized technical knowledge.
        </li>
      </ul>

      <h4>Technical skills we are currently vetting:</h4>
      <ul className="skills-list">
        <li>
          JavaScript/TypeScript, Node.js, React.js, MongoDB/SQL/Postgres, Kafka
        </li>
        <li>GraphQL and RESTful APIs</li>
        <li>
          AWS (S3, SQS, SNS, EC2, VPC, R53, RDS), Google Cloud (Gemini AI API,
          reCAPTCHA, Google OAuth 2.0), Heroku
        </li>
        <li>Unit testing (Jest), Automation Testing (Cypress)</li>
        <li>Docker, Kubernetes</li>
        <li>Braintree, Stripe</li>
        <li>Git, HTML, CSS, SASS, Gatsby, StoryBook, Redis</li>
      </ul>

      <p className="call-to-action">
        Interested?{" "}
        <a
          href="https://calendly.com/iqralatif159/moreinformation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to schedule a call
        </a>{" "}
        or feel free to send me an email at{" "}
        <a href="mailto:Iqra@vettguard.com">Iqra@vettguard.com</a>, and we can
        continue from there.
      </p>
    </div>
  );
};
