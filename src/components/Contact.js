import React, { useState } from "react";
import Home from "./Home";

const Contact = () => {
  const [info, setInfo] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Your response is successfully recorded.");
    setInfo({ fullName: "", mobileNumber: "", email: "", message: "" });
  };

  return (
    <>
      <h1 className="my-3 text-center mb-4">Contact Us</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={submitForm}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="none"
                  required
                  name="fullName"
                  value={info.fullName}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Contact Number</label>
                <input
                  type="number"
                  className="form-control py-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="none"
                  required
                  name="mobileNumber"
                  value={info.mobileNumber}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="none"
                  required
                  name="email"
                  value={info.email}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={info.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div className="btnDiv text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-2 w-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
