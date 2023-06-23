import React from "react";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <NavbarMain>
      <A href="/">GoldStone</A>
      <A href="/">Users</A>
      <A href="/login">Login</A>
    </NavbarMain>
  );
};

export default Navbar;
const NavbarMain = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: red;
  font-weight: 600;
`;
