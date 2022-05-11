import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useGeoLocation from "react-ipgeolocation";
import React from ".";
import Sider from "./components/sider";
import {SignUpForm} from "./components/signUpForm";
import {Row,Col,Button,Form} from 'antd'
import './signUp.scss'


function SignUp() {
  const location = useGeoLocation();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    gender: "",
    country: "",
  });
  const { firstName, lastName, email, username, password } = formData;

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
  const onSubmit = async (e, location) => {
    e.preventDefault();
    console.log("on submit", formData);
    const res = await axios.post(
      "http://localhost:4000/contact",
      formData,
      config
    );
    console.log(res);
    console.log("location", location.country);
  };
  return (
      <Form
          form={form}
          layout="horizontal"
          className={"signIn-form"}
          name="product-form" labelCol={{ span:4}}
      >
        <Sider>
          <SignUpForm/>
        </Sider>
      </Form>
  );
}

export default SignUp;
