import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  console.log(reviews);
  return (
    <div>
      <h1>Ours Testimonials</h1>
      <div></div>
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
