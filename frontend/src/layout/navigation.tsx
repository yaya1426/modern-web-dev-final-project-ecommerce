import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

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
};

const Navigation = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Container>
      <NavLink isActive={pathname === routes.home} href={routes.home}>
        Home
      </NavLink>
      <NavLink
        isActive={pathname === routes.categories}
        href={routes.categories}
      >
        Categories
      </NavLink>
      <NavLink isActive={pathname === routes.about} href={routes.about}>
        About
      </NavLink>
    </Container>
  );
};

export default Navigation;
