import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { edit_user_action } from "../../Redux/users/users.action";

const EditModal = ({ id, setShowEdit, showEdit }) => {
  console.log(id);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("-");
  const [status, setStatus] = useState("-");
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
    } else {
      dispatch(edit_user_action(id, body));
      // SETTING FORM TO DEFAULT
      setEmail("");
      setName("");
      setGender("-");
      setStatus("-");
      setShowEdit(showEdit === false ? true : false);
    }
  };
  return (
    <SignupMain>
      {/*  */}
      <SignupForm action="submit" onSubmit={handleSubmit}>
        <CloseButton
          onClick={() => setShowEdit(showEdit === false ? true : false)}
        >
          CLOSE
        </CloseButton>
        <InputContainer>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default EditModal;
//
const SignupMain = styled.div`
  position: absolute;
  width: 720px;
  top: 20%;
  right: 25%;
  background-color: #fff;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 10px;
`;

const SignupForm = styled.form`
  width: 90%;
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
const CloseButton = styled.button`
  padding: 5px 0;
  width: 150px;
  margin: auto;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid grey;
`;
