import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { useEffect } from "react";

function SignUp() {
    useEffect(() => {
        const res = await axios.get(
            "http://localhost:4000/contact" 
          );

      }, []); 
       const [userData, setUserData] = useState({});
  const { firstName, lastName, email, username, password } = userData;

  const onChange = (e) => {
    // let el = e.target.type == "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(" on change", formData);
  };
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("on submit", formData);
    const res = await axios.post(
      "http://localhost:4000/contact",
      formData,
      config
    );
    console.log(res);
  };
  return <></>;
}

export default UserInfo;
