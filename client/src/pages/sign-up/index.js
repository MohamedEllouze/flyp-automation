import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { useEffect } from "react";
import useGeoLocation from "react-ipgeolocation";

function SignUp() {
  const location = useGeoLocation();

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
    <>
      <Form
        onSubmit={(e) => {
          onSubmit(e, location);
        }}
      >
        <Input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => onChange(e)}
        />

        <Input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => onChange(e)}
        />
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => onChange(e)}
        />
        <Input
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <p>Choose something you like, this cannot be changed.</p>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </FormGroup>
        <p>
          Must be at least 6 characters and must contain a number or symbol.
        </p>
        <FormGroup>
          <Input id="selectGender" name="select" type="select">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unspecified</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input id="selectPlace" name="select" type="select">
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>India</option>
          </Input>
        </FormGroup>
        <p>
          The country you select will be saved as your default shopping
          experience. If you sell an item, this is where it will ship from.
        </p>
        <p>
          We don’t spam. By creating an account, you agree to
          <a>Poshmark's Terms</a>
          and <a>Privacy Policy</a>.
        </p>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default SignUp;
