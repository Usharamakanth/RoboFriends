import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow">
      <img alt="robots" src={`https://robohash.org/${id}?100X100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
