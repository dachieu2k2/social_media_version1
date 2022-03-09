import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";

const ChangeAvatar = () => {
  //Context
  const { userInfo, changeAvatar } = useContext(UserContext);

  // img state
  const [image, setImage] = useState(null);

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onChangeAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", image);
      const response = await changeAvatar(formData);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {image ? (
        <img src={URL.createObjectURL(image)} />
      ) : (
        <img src={userInfo?.avatar} />
      )}

      <input type="file" onChange={onChangeFile} />
      <button onClick={onChangeAvatar}>Change avatar</button>
    </div>
  );
};

export default ChangeAvatar;
