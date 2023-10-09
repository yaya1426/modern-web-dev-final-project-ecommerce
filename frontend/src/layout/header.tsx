import { FC } from "react";
import styled from "styled-components";
import { UserButton } from "@clerk/nextjs";
import { typography } from "@/theme/typography";
import { spacing } from "@/theme/spacing";
import Navigation from "./navigation";

const SiteLogo = styled.div`
  color: #000000;
  font-weight: ${typography.black};
  font-size: 34px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  padding: 0px ${spacing.huge}px;
`;

const AuthenticationWrapper = styled.div``;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <SiteLogo>Meem</SiteLogo>
      <Navigation />
      <AuthenticationWrapper>
        <UserButton afterSignOutUrl="/" />
      </AuthenticationWrapper>
    </HeaderWrapper>
  );
};

export default Header;
