import { useState } from "react";
import axios from "axios";
import React from ".";
import { Row, Col, Input, Button, Form } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

function SignUp() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    console.log("location", location);
  };
  return (
    <Form
      form={form}
      layout="horizontal"
      className={"signIn-form"}
      name="product-form"
      labelCol={{ span: 4 }}
      onSubmit={(e) => onSubmit(e)}
    >
      <Row gutter={[0, 40]} className={"col-signUp"}>
        <Col span={24}>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <Row gutter={[0, 10]} justify={"end"}>
                <Col span={24}>
                  <Form.Item
                    name="firstName"
                    className={"form-item-style"}
                    label={"Name"}
                  >
                    <Input
                      className={"spn2"}
                      name="firstName"
                      placeholder={"firstName"}
                      onChange={(e) => onChange(e)}
                      value={firstName}
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="lastName"
                    className={"form-item-style"}
                    label={"lastName"}
                  >
                    <Input
                      className={"spn2"}
                      name="lastName"
                      placeholder={"lastName"}
                      onChange={(e) => onChange(e)}
                      value={lastName}
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    className={"form-item-style"}
                    name="email"
                    label={
                      <div>
                        <span style={{ color: "rgba(0, 0, 0, 0.85)" }}>
                          Email
                        </span>
                      </div>
                    }
                  >
                    <Input
                      className={"spn2"}
                      name="email"
                      placeholder={"email"}
                      onChange={(e) => onChange(e)}
                      value={email}
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Form.Item
                name="username"
                className={"form-item-style"}
                label={"username"}
              >
                <Input
                  className={"spn2"}
                  name="username"
                  placeholder={"username"}
                  onChange={(e) => onChange(e)}
                  value={username}
                ></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                className={"form-item-style"}
                name="password"
                label={
                  <div>
                    <span style={{ color: "rgba(0, 0, 0, 0.85)" }}>
                      {"Password"}
                    </span>
                  </div>
                }
              >
                <Input.Password
                  className={"spn2"}
                  name="password"
                  placeholder={"password"}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  onChange={(e) => onChange(e)}
                  value={password}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[0, 10]}>
                <Col span={24}>
                  <Form.Item
                    name="gender"
                    className={"form-item-style"}
                    label={"gender"}
                  >
                    <select
                      className={"spn2 slect-nbr-empl"}
                      name="gender"
                      defaultValue={"Select Gender"}
                      onChange={(e) => onChange(e)}
                    >
                      <option value="Select Gender">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unspecified">Unspecified</option>
                    </select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[0, 10]}>
                <Col span={24}>
                  <Form.Item
                    name="country"
                    className={"form-item-style"}
                    label={"SelectCountry"}
                  >
                    <select
                      className={"spn2 slect-nbr-empl"}
                      name="country"
                      defaultValue={"United States"}
                      onChange={(e) => onChange(e)}
                    >
                      <option value=" United States">United States</option>
                      <option value=" Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value=" India">India</option>
                    </select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row className={"text-form"} gutter={[10, 0]}>
                <Col>
                  <Button onClick={onSubmit}>Sign Up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default SignUp;
