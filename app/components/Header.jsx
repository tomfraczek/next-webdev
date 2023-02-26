"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll } from "framer-motion";

import { MainLogo } from "./MainLogo";
// import { HamburgerMenu } from "components/hamburgerMenu";

import { Container } from "../theme/global-styles";

import styled from "styled-components";

export const HeaderComponent = styled.div`
  height: 7rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    &:hover {
      color: #457b9d;
    }
  }
`;

export const MenuItem = styled.span`
  margin-right: 3rem;
`;

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };

  return (
    <Container>
      <HeaderComponent
        as={motion.nav}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <HeaderContent>
          <MainLogo />
          {/* <HamburgerMenu /> */}
        </HeaderContent>
      </HeaderComponent>
    </Container>
  );
};
