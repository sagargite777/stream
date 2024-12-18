import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStream, fetchStreams } from "../actions";
import { useNavigate } from "react-router-dom";

const StreamCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const streams = useSelector((state) => Object.values(state.streams));

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const validate = () => {
    const validationErrors = {};
    if (!title.trim()) {
      validationErrors.title = "Title is required.";
    }
    if (!description.trim()) {
      validationErrors.description = "Description is required.";
    }
    if (
      streams.some(
        (stream) =>
          stream.title.trim().toLowerCase() === title.trim().toLowerCase()
      )
    ) {
      validationErrors.title = "Title must be unique. Duplicate detected.";
    }
    return validationErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(createStream({ title, description }));
    navigate("/");
  };

  return (
    <div>
      <h2>Create a Stream</h2>
      <form className="ui form" onSubmit={onSubmit}>
        <div className={`field ${errors.title ? "error" : ""}`}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter stream title"
          />
          {errors.title && <div className="ui pointing red basic label">{errors.title}</div>}
        </div>
        <div className={`field ${errors.description ? "error" : ""}`}>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter stream description"
          />
          {errors.description && (
            <div className="ui pointing red basic label">{errors.description}</div>
          )}
        </div>
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StreamCreate;
