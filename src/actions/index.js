import axios from "axios";

export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_STREAM = "FETCH_STREAM";
export const CREATE_STREAM = "CREATE_STREAM";
export const EDIT_STREAM = "EDIT_STREAM";
export const DELETE_STREAM = "DELETE_STREAM";

const API = "http://localhost:3005/streams";

export const fetchStreams = () => async (dispatch) => {
  const response = await axios.get(API);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await axios.get(`${API}/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = (stream) => async (dispatch) => {
  const response = await axios.post(API, stream);
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const editStream = (id, updates) => async (dispatch) => {
  const response = await axios.put(`${API}/${id}`, updates);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
