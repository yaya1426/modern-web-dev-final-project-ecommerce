import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { FC } from "react";
import styled from "styled-components";
import Facebook from "./social-icons/facebook";
import Instagram from "./social-icons/instagram";
import Twitter from "./social-icons/twitter";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.palette.skyBlue};
  color: #ffffff;
  height: 53px;
  padding: 0px ${spacing.huge}px;
  
`;

const Left = styled.div`
  color: ${colors.palette.darkBlue};
`;

const Right = styled.div`
  color: ${colors.palette.skyBlue};
  display: flex;
  gap: ${spacing.micro}px;
`;

const Footer: FC = () => {
  return (
    <Wrapper>
      <Left>All Rights Reserved</Left>
      <Right>
        <a href="https://www.facebook.com/" target="_blank">
          <Facebook />
        </a>
       
        <a href="https://www.instagram.com/" target="_blank">
          <Instagram />
        </a>

        <a href="https://twitter.com/" target="_blank">
          <Twitter />
        </a>

      </Right>
    </Wrapper>
  );
};

export default Footer;
