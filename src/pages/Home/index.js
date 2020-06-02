import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepages } from "../../store/homepages/actions";

import { selectAllPages, selectLoaded } from "../../store/homepages/selectors";
import HomepageCard from "../../components/Cards/HomepageCard";

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
        // const { backgroundColor, color, title, id, description } = page;
        return <HomepageCard key={page.id} {...page} />;
      });
    } else {
      return null;
    }
  };

  return <div>{renderTitles()}</div>;
}
