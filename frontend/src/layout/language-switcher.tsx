import { colors } from "@/theme/colors";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

import styled from "styled-components";

const LanguageButton = styled(Link)`
  cursor: pointer;
  color: ${colors.palette.neutral100};
`;

const LanguageSwitcher = () => {
  const t = useTranslations();
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const pathname = usePathname();

  return (
    <LanguageButton href={pathname} locale={otherLocale}>
      {t("language")}
    </LanguageButton>
  );
};

export default LanguageSwitcher;
