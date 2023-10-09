"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import TopBar from "./top-bar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Container = styled.body`
  margin: 0;
`;

const Content = styled.div`
  min-height: 85vh;
`;

const BodyContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container className={roboto.className}>
      <TopBar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default BodyContainer;
