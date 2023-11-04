import React from "react";
import Form from "./components/Form";
import Location from "./components/Location";

const App = () => {
  return (
    <div className="flex mt-12 justify-center">
      <div className="p-6 flex border gap-3 bg-white border-[#999999] rounded-lg flex-col items-center ">
      <p className="font-bold text-[1.5rem]">Zip Code Information App</p>
      <Form />
      <Location />
      </div>
    </div>
  );
};

export default App;
