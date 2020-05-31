import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepages } from "../../store/homepages/actions";

import { selectAllPages, selectLoaded } from "../../store/homepages/selectors";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  const loaded = useSelector(selectLoaded);
  const homepages = useSelector(selectAllPages);

  useEffect(() => {
    dispatch(fetchHomepages);
  }, [dispatch]);

  const renderTitles = () => {
    if (loaded) {
      return homepages.map((page) => {
        const { backgroundColor, color, title, id, description } = page;
        return (
          <div style={{ backgroundColor, color }} key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/homepages/${id}`}>
              <span>Visit page</span>
            </Link>
          </div>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {renderTitles()}
    </div>
  );
}
