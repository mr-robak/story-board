import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageWithStories } from "../../store/homepages/actions";
import { selectPage, selectLoaded } from "../../store/homepages/selectors";

export default function PageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageWithStories(id));
  }, [dispatch, id]);

  const loaded = useSelector(selectLoaded);
  const homepage = useSelector(selectPage);
  // console.log("DETAILS PAGE");
  // console.log("loaded", loaded);
  // console.log("homepage", homepage);

  const renderPage = () => {
    if (loaded && homepage.id) {
      const { title, description, stories, backgroundColor, color } = homepage;
      // console.log(`loaded=${loaded} so check stories:`, stories);
      return (
        <div>
          <h1 style={{ backgroundColor, color }}>{title}</h1>
          <p style={{ backgroundColor, color }}> {description} </p>
          {stories
            .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .map((story) => {
              const { id, name, content, imageUrl, createdAt } = story;
              return (
                <div key={id}>
                  <h4>{name}</h4>
                  <img src={imageUrl} alt={name} />
                  <p>{content}</p>
                  <p>Created: {createdAt}</p>
                </div>
              );
            })}
        </div>
      );
    } else {
      return null;
    }
  };

  return <div>{renderPage()}</div>;
}
