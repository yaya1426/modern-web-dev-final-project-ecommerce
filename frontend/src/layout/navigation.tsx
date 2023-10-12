import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing.large}px;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 18px;
  color: ${({ isActive }) =>
    isActive ? colors.palette.pink : colors.palette.darkBlue};

  &:hover,
  &:active {
    color: ${colors.palette.pink};
  }
`;

const routes = {
  home: "/",
  categories: "/categories",
  about: "/about",
  chat: "/chat"
};

const Navigation = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  return (
    <Container>
      <NavLink
        isActive={pathname === routes.home}
        href={routes.home}
        locale={locale}
      >
        {t("home")}
      </NavLink>
      <NavLink
        isActive={pathname === routes.categories}
        href={routes.categories}
        locale={locale}
      >
        {t("categories")}
      </NavLink>
      <NavLink
        isActive={pathname === routes.about}
        href={routes.about}
        locale={locale}
      >
        {t("about")}
      </NavLink>
      <NavLink
        isActive={pathname === routes.chat}
        href={routes.chat}
        locale={locale}
      >
        {t("chat")}
      </NavLink>
    </Container>
  );
};

export default Navigation;
