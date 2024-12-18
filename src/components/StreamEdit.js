import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, editStream } from "../actions";
import { useParams, useNavigate } from "react-router-dom";

const StreamEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stream = useSelector((state) => state.streams[id]);

  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (stream) setForm({ title: stream.title, description: stream.description });
  }, [stream]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editStream(id, form));
    navigate("/");
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Stream</h2>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <button className="ui button primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default StreamEdit;
