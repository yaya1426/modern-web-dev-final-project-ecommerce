"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Container = styled.body`
  margin: 0;
`;

const Content = styled.div`
  min-height: 85vh;
`;

const BodyContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default BodyContainer;
