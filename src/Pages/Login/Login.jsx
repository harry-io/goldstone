import React, { useState } from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login_action } from "../../Redux/users/users.action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("-");
  const [status, setStatus] = useState("-");

  //
  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const body = {
      name,
      email,
      gender,
      status,
    };
    //
    if (gender === "-" || status === "-") {
      alert("Please fill/select all the details.");
      return;
    } else {
      dispatch(login_action(body, navigate));
      // SETTING FORM TO DEFAULT
      setEmail("");
      setName("");
      setGender("-");
      setStatus("-");
    }
  };
  return (
    <SignupMain>
      {/*  */}
      <SignupForm action="submit" onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <SelectContainer>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="-">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="-">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </SelectContainer>
        <Submit>
          <FaRegArrowAltCircleRight />
        </Submit>
      </SignupForm>
    </SignupMain>
  );
};

export default Login;
//
const SignupMain = styled.div`
  margin-top: 6rem;
`;

const SignupForm = styled.form`
  width: 36%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
const InputContainer = styled.div`
  position: relative;
  border: 1px solid #96949494;
  padding-left: 1rem;
  padding-top: 5px;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 50px;
  display: block;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus + .input-label {
    font-size: 12px;
    color: #007bff;
  }
  &:focus + .input-label + .input-highlight {
    width: 100%;
  }
`;
const Label = styled.label`
  padding-left: 1.1rem;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
`;
const Span = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #007bff;
  transition: all 0.3s ease;
`;

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  background: none;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    color: #007bff;
  }
  &:focus {
    color: red;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Select = styled.select`
  width: 150px;
  height: 30px;
  border: 1px solid #96949494;
  border-radius: 5px;
  padding-left: 0.7rem;
  color: #555454;
  &:focus {
    outline: 3px solid #007bff5e;
  }
`;
