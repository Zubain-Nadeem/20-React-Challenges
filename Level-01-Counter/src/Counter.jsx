import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((add) => add + Number(step));
  };
  const handleDecrement = () => {
    setCount((sub) => sub - Number(step));
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const handleChange = (e) => {
    setStep(e.target.value);
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[60vh]">
      <div className="border border-black w-[40%] min-h-[40vh] text-center p-6">
        <h1 className="text-2xl font-bold">{count}</h1>
        <div className=" flex gap-8 justify-center items-center mt-3.5">
          <button
            onClick={handleDecrement}
            className="py-2 bg-blue-200 text-black cursor-pointer  px-5"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            className="py-2 bg-blue-200 text-black cursor-pointer  px-4"
          >
            +
          </button>
        </div>

        <div className=" mt-3.5 p-2 flex gap-1.5 justify-center">
          <label>Increment & Decrement by</label>
          <input
            type="number"
            value={step}
            onChange={handleChange}
            className=" border border-black pl-1.5"
          />
        </div>
        <button
          onClick={handleReset}
          className=" py-2.5 px-5 rounded-4xl mt-3.5 bg-blue-200 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
