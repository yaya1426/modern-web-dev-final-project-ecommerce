"use client";
import ProductCard from "@/components/product-card";
import SectionTitle from "@/components/section-title";
import Sliders from "@/components/sliders";
import { HomeSlides } from "@/data/home";
import { spacing } from "@/theme/spacing";
import { useTranslations } from "next-intl";
import styled from "styled-components";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.large}px ${spacing.extraLarge}px;
`;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.large}px;
`;

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      <Sliders slides={HomeSlides} />
      <BodyWrapper>
        <SectionTitle />
        <ProductWrapper>
          <ProductCard />
          <ProductCard />
        </ProductWrapper>
      </BodyWrapper>
    </div>
  );
}
