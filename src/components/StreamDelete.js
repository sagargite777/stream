import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream, deleteStream } from "../actions";
import { useParams, useNavigate } from "react-router-dom";

const StreamDelete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [dispatch, id]);

  const onDelete = () => {
    dispatch(deleteStream(id));
    navigate("/");
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Delete Stream</h2>
      <p>Are you sure you want to delete the stream: <strong>{stream.title}</strong>?</p>
      <button onClick={onDelete} className="ui button negative">Delete</button>
      <button onClick={() => navigate("/")} className="ui button">Cancel</button>
    </div>
  );
};

export default StreamDelete;
