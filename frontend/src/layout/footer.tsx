import { spacing } from "@/theme/spacing";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #000000;
  color: #ffffff;
  padding: 0px ${spacing.huge}px;

`;

const Footer: FC = () => {
  return (
    <Wrapper>
      All Rights Reserved
    </Wrapper>
  );
};

export default Footer;
