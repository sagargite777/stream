import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamList from "./components/StreamList";
import StreamCreate from "./components/StreamCreate";
import StreamEdit from "./components/StreamEdit";
import StreamDelete from "./components/StreamDelete";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
