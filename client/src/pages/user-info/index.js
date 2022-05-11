import { useState } from "react";
import axios from "axios";
import { Input, Button } from "antd";

function UserInfo() {
  const [userData, setUserData] = useState({});

  const onChange = (e) => {
    setUserData({ userLink: e.target.value });
    console.log(userData);
  };
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  const onSubmit = async (e) => {
    e.preventDefault(e);
    console.log("on submit", userData);
    const res = await axios.post(
      "http://localhost:4000/contact/profil",
      userData,
      config
    );
    setUserData(res.data);
  };
  return (
    <section className="main-section">
      <form>
        <Input
          name="userLink"
          className={"spn2"}
          onChange={(e) => onChange(e)}
        ></Input>
        <Button onClick={(e) => onSubmit(e)}>Get Info</Button>
      </form>
      <div className="big-container">
        <img src={userData.ProfilePic} />
        <div>
          <h1>{userData.name}</h1>
          {userData.numberOfListings ? (
            <h2>Listings: {userData.numberOfListings}</h2>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
