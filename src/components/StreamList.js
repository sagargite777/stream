import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";

const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector((state) => Object.values(state.streams));

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderAdmin = (stream) => (
    <div className="right floated content">
      <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
        Edit
      </Link>
      <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
        Delete
      </Link>
    </div>
  );

  const renderList = () => {
    return streams.map((stream) => (
      <div key={stream.id} className="item">
        {renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <h3 style={{marginBottom:'5px'}}>{stream.title}</h3>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      <Link to="/streams/new" className="ui button primary" style={{ marginBottom: "10px" }}>
        Create Stream
      </Link>
    </div>
  );
};

export default StreamList;
