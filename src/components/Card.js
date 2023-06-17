import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = (props) => {
  const review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-30"
          src={review.image}
          alt="img"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
      </div>
      <div className="text-center mt-7">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">
        <p>{review.text}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button className="cursor-pointer hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button className="cursor-pointer hover:text-violet-500">
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Card;
