import React from "react";

function CastList({ casts }) {
  return (
    <>
      {casts.map((cast) => (
        <li key={cast.cast_id}>
          <img
            alt=""
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </>
  );
}

export default CastList;
