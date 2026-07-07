import React, { useRef } from "react";
import Form from "./components/Form";
import RHF from "./components/RHF";

const App = () => {
  console.log("app rendering...");
  let inpRef = useRef();

  return (
    <div className="h-screen p-5 bg-gray-300 w-full">
      <h1 className="mb-8">Hey this is form</h1>
      {/* <Form /> */}
      <RHF />
    </div>
  );
};

export default App;
