import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageWithStories } from "../../store/homepages/actions";
import { selectAllPages } from "../../store/homepages/selectors";

export default function PageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageWithStories(id));
  }, [dispatch, id]);

  const homepage = useSelector(selectAllPages);

  //   console.log("datails", page);

  //   console.log(title, description, backgroundColor, color, createdAt);

  const renderPage = () => {
    if (homepage.pages.stories) {
      const {
        loading,
        pages: {
          title,
          description,
          stories,
          backgroundColor,
          color,
          createdAt,
        },
      } = homepage;

      console.log("stories", stories);
      return (
        <div>
          <h1 style={{ backgroundColor, color }}>{title}</h1>
          <p style={{ backgroundColor, color }}> {description} </p>
          {/* <p>Created: {createdAt}</p> */}
          {stories.map((story) => {
            const { name, content, imageUrl, createdAt } = story;
            return (
              <div>
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

  return <div>{homepage.loading ? null : renderPage()}</div>;
}
