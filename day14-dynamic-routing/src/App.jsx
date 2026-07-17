import React from "react";
import Navbar from "./components/Navbar";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
