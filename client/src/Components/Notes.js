import React, { useState, useCallback } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const formSubmitted = useCallback(
    (event) => {
      event.preventDefault();
      const data = {
        title,
        description,
        tag,
      };
      console.log(data);
    },
    [title, description, tag]
  );

  return (
    <>
      <form className="container mt-5" onSubmit={formSubmitted}>
        <div className="mb-3">
          <label className="form-label fw-bolder">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bolder">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bolder">Tag</label>
          <input
            type="text"
            className="form-control"
            placeholder="tag"
            value={tag}
            onChange={(event) => {
              setTag(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-danger rounded fs-5">
          Add Note
        </button>
      </form>
    </>
  );
};

export default Notes;
