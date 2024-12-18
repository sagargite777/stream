import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
  } from "../actions";
  
  const streamsReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_STREAMS:
        return { ...state, ...Object.fromEntries(action.payload.map((stream) => [stream.id, stream])) };
      case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case CREATE_STREAM:
      case EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case DELETE_STREAM:
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      default:
        return state;
    }
  };
  
  export default streamsReducer;
  