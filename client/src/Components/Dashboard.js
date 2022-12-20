import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: " 150px" }}
          />
          <h5 className="my-3">John Smith</h5>
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
          <div className="d-flex justify-content-center mb-2">
            <button type="button" className="btn btn-outline-success rounded">
              Github
            </button>
            <button
              type="button"
              className="btn btn-outline-danger rounded ms-1"
            >
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
