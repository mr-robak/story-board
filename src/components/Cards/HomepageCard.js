import React from "react";
import { Link } from "react-router-dom";
import "./HomepageCard.css";

export default function HomepageCard(props) {
  const { backgroundColor, color, title, id, description } = props;
  return (
    <div className="HomepageCard" style={{ backgroundColor, color }} key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="myButton" to={`/homepages/${id}`}>
        <span>Visit page</span>
      </Link>
    </div>
  );
}
