import React, { useState, useCallback } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmitted = useCallback(
    (event) => {
      event.preventDefault();

      const data = {
        email,
        message,
      };
      console.log(data);
    },
    [email, message]
  );

  return (
    <>
      <form className="container" onSubmit={formSubmitted}>
        <div className="mb-3 mt-5">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 mt-5">
          <label className="form-label">Message</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="enter you message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-outline-danger w-100 rounded fs-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
