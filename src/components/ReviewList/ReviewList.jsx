import React from "react";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
}

export default ReviewList;
