import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { UserButton } from "@clerk/nextjs";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #000000;
  width: 100%;
  padding: 25px 15px;
`;

const SiteLogo = styled.div`
  color: #ffffff;
`;

const Header: FC = () => {
  return (
    <Navbar>
      <SiteLogo>Meem</SiteLogo>
      <UserButton afterSignOutUrl="/" />
    </Navbar>
  );
};

export default Header;
