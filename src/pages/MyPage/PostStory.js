import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { updateHomePage } from "../../store/homepages/actions";

export default function PostStory(props) {
  const { resetEdit } = props;
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    imageUrl: "",
  });
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    // console.log("form submited");
    // dispatch(updateHomePage(formData));
    // resetEdit();
  };

  const formInputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    //
  };

  return (
    <div>
      <h3>Post a story:</h3>
      <form onSubmit={submitForm}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={formInputHandler}
            placeholder="Name of your story"
            required
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={formInputHandler}
            placeholder="Write your story here..."
            required
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={formInputHandler}
            placeholder="Paste url to your image here..."
            required
          />
        </label>
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
      {formData.imageUrl && <img src={formData.imageUrl} alt="preview" />}
    </div>
  );
}
