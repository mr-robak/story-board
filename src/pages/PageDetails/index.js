import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageWithStories } from "../../store/homepages/actions";
import {
  selectPage,
  selectLoading,
  selectAllPages,
} from "../../store/homepages/selectors";
// import { useState } from "react";

export default function PageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const homepage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchPageWithStories(id));
  }, [dispatch, id]);

  const loading = useSelector(selectLoading);

  console.log("DETAILS PAGE");
  console.log("loading", loading);
  console.log("homepage details", homepage);

  // console.log("stories", description);

  const renderPage = () => {
    if (!loading) {
      const {
        title,
        description,
        stories,
        backgroundColor,
        color,
        createdAt,
      } = homepage;

      // console.log("stories", stories);
      return (
        <div>
          <h1 style={{ backgroundColor, color }}>{title}</h1>
          <p style={{ backgroundColor, color }}> {description} </p>
          {/* <p>Created: {createdAt}</p> */}
          {stories
            .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .map((story) => {
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

  return <div>{renderPage()}</div>;
}
