import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import styled from "styled-components";

export const Wrapper = styled.header`
  position: static;
  display: flex;
  align-items: center;
  height: 44px;
  top: 0;
  background-color: ${colors.palette.purple};
  padding: 0px ${spacing.huge}px;

  * {
    font-family: "Cabin", sans-serif;
  }
`;

const TopBar = () => {
  return <Wrapper></Wrapper>;
};
export default TopBar;
