"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import TopBar from "./top-bar";
import { Roboto, Cairo } from "next/font/google";
import { useLocale } from "next-intl";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
});

const Container = styled.body`
  margin: 0;
`;

const Content = styled.div`
  min-height: calc(100vh - 177px);
`;

const BodyContainer: FC<PropsWithChildren> = ({ children }) => {
  const locale = useLocale();

  return (
    <Container className={locale === "en" ? roboto.className : cairo.className}>
      <TopBar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default BodyContainer;
