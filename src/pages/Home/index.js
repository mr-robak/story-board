import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepages } from "../../store/homepages/actions";

import { selectAllPages } from "../../store/homepages/selectors";
import { Link } from "react-router-dom";

export default function Home() {
  // const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const homepages = useSelector(selectAllPages);

  useEffect(() => {
    dispatch(fetchHomepages);
  }, [dispatch]);

  const renderTitles = () => {
    if (homepages.loading) {
      return null;
    } else {
      return homepages.pages.map((page) => {
        const { backgroundColor, color, title, id, description } = page;
        return (
          <div style={{ backgroundColor, color }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/homepages/${id}`}>
              <span>Visit page</span>
            </Link>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {renderTitles()}
    </div>
  );
}
