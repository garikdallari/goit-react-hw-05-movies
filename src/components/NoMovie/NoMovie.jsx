import React from "react";
import { FaSadCry } from "react-icons/fa";

function NoMovie() {
  return (
    <div>
      <p>
        Sorry we dont have detailed information about this movie{" "}
        {<FaSadCry size={30} />}
      </p>
      <img
        src="https://smartland.com/blog/wp-content/uploads/2019/12/Cat-1.jpg"
        alt="cat"
      />
    </div>
  );
}

export default NoMovie;
