import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  padding: 25px 15px;
`;

const Footer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      All Rights Reserved
      {children}
    </Wrapper>
  );
};

export default Footer;
