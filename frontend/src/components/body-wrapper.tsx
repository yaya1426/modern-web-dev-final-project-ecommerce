"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.body`
  margin: 8;
`;

const BodyContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BodyContainer;