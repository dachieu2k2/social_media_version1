import React, { useContext, useState } from "react";
import "./WriteBlog.css";
import { GoX } from "react-icons/go";
import { PostContext } from "../../contexts/post";

const WriteBlog = ({ show, handleClickShow }) => {
  //postContext
  const { createPost } = useContext(PostContext);

  //state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const onChangeFile = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleCreatePost = async () => {
    handleClickShow(!show);
    const obj = {
      title,
      description,
    };
    const json = JSON.stringify(obj);
    const blob = new Blob([json], {
      type: "application/json",
    });
    try {
      const formData = new FormData();
      formData.append("post", image);
      formData.append("document", blob);
      // console.log(formData);
      const response = await createPost(formData);

      // if (response.success) {
      //   navigate("/");
      // }
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {show && (
        <div className="write__blog">
          <div className="write__blog-modal" onClick={handleClickShow}></div>
          <div className="write__blog-container">
            <div className="write__blog-icon">
              <span className="write__blog-button">
                <GoX className="write__blog-color" onClick={handleClickShow} />
              </span>
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Title</div>
              <input
                type="text"
                className="write__blog-input"
                placeholder="title..."
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Description</div>
              <input
                type="text"
                className="write__blog-input"
                placeholder="Description..."
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="write__blog-control">
              <div className="write__blog-title">Choose file</div>
              <input
                type="file"
                className="write__blog-file"
                onChange={onChangeFile}
              />
            </div>
            <div className="write__blog-container-image">
              {image && (
                //   <img
                //   src="https://bloggioitre.net/wp-content/uploads/2021/06/ngam-gai-xinh-giup-tang-tuoi-tho.jpg"
                //   alt=""
                //   className="write__blog-img"
                // />
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="write__blog-img"
                />
              )}
            </div>
            <span
              className="write__blog-button-save"
              onClick={handleCreatePost}
            >
              Save
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default WriteBlog;
