import React, { useState } from "react";

const State = (props) => {
  const [text, setText] = useState("Enter Text");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <div>
      <div className="container flex justify-center items-center flex-col my-4 gap-3 ">
        <h1 className="text-4xl font-bold">{props.heading}</h1>
        <label htmlFor="Write">Enter Text</label>
        <textarea
          id="Write"
          rows={8}
          cols={100}
          value={text}
          onChange={handleChange}
          className="border border-slate-400 p-2 focus:shadow-blue-300 shadow-2xl"
        ></textarea>
        <div className="flex gap-5">
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white flex justify-center items-center px-5 py-3.5 rounded-2xl cursor-pointer"
          >
            Convert Upper Case
          </button>
          <button
            onClick={handleClick2}
            className="bg-blue-600 text-white flex justify-center items-center px-5 py-3.5 rounded-2xl cursor-pointer"
          >
            Convert Lower Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default State;
