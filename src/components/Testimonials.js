import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const len = reviews.length;

  function leftShiftHandler() {
    if (index === 0) {
      setIndex(len - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  function rightShiftHandler() {
    if (index === len - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  }

  function surpriseHandler() {
    //generate a random numbers
    const randomIndex = Math.floor(Math.random() * len);
    console.log(randomIndex);
    setIndex(randomIndex);
  }
  return (
    <div>
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
