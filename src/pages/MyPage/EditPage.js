import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { updateHomePage } from "../../store/homepages/actions";

export default function EditPage(props) {
  const { resetEdit } = props;
  const {
    homepage: { id, title, description, backgroundColor, color },
  } = useSelector(selectUser);

  const [formData, setFormData] = useState({
    id,
    title,
    description,
    backgroundColor,
    color,
  });
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    // console.log("form submited");
    dispatch(updateHomePage(formData));
    resetEdit();
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
      <h3>Edit your page</h3>
      <form onSubmit={submitForm}>
        <label>
          name:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          color:
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={formInputHandler}
          />
        </label>
        <label>
          background
          <input
            type="color"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={formInputHandler}
          />
        </label>
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
