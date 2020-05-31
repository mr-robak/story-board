import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import { useState } from "react";
import EditPage from "./EditPage";
import PostStory from "./PostStory";

// import Loading from "../../components/Loading";

export default function MyPage() {
  const [editing, setEditing] = useState(false);
  const [posting, setPosting] = useState(false);

  const user = useSelector(selectUser);
  const { token } = user;
  // const homepage = useSelector(selectUsersPage(id));

  // console.log("user", user);
  // console.log("homepage", user.homepage);
  const homepage = user.homepage;
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null && token !== null) {
    return <Loading />;
  }

  const resetEdit = () => {
    setEditing(false);
    setPosting(false);
  };

  const { backgroundColor, color, title, id, description, stories } = homepage;
  const renderMyPage = () => {
    if (token === null) {
      history.push("/");
    }
    return (
      <div>
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit my page
        </button>
        <button
          onClick={() => {
            setPosting(true);
          }}
        >
          Post a story
        </button>
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
  };

  // const render =

  return (
    <div>
      <div style={{ backgroundColor, color }} key={id}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {editing ? (
        <EditPage resetEdit={resetEdit} />
      ) : posting ? (
        <PostStory resetEdit={resetEdit} />
      ) : (
        renderMyPage()
      )}
    </div>
  );
}
