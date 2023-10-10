import { colors } from "@/theme/colors";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const LangaugeButton = styled(Link)`
  cursor: pointer;
  color: ${colors.palette.neutral100};
`;

const LanguageSwitcher = () => {
  const t = useTranslations();
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const pathname = usePathname();
  const router = useRouter();

  return (
    <LangaugeButton href={pathname} locale={otherLocale}>
      {t("langauge")}
    </LangaugeButton>
  );
};

export default LanguageSwitcher;
