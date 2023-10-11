"use client";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Categories");

  return <h1>{t("title")}</h1>;
}
