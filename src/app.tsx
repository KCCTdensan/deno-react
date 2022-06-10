import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/index.tsx";
import Counter from "./pages/counter.tsx";
import NotFound from "./pages/notfound.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/counter/" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
