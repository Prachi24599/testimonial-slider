import React from "react";

const Card = (props) => {
  const review = props.review;
  return (
    <div>
      <div>
        <img src={review.image} alt="img" />
      </div>
      <div>
        <p>{review.name}</p>
      </div>
      <div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default Card;
