import { Link } from "react-router-dom";

import styled from "styled-components";

export const LogoContainer = styled.div``;

export const Logo = styled.h1`
  font-size: 32px;
  &:hover > a span:first-of-type {
    color: #457b9d;
  }
`;

export const LogoOne = styled.span`
  color: #003049;
`;

export const LogoTwo = styled.span`
  color: #d62828;
`;

export const MainLogo = ({ toggleMenu }) => {
  return (
    <LogoContainer>
      <Logo>
        <Link to="/" onClick={() => toggleMenu(false)}>
          <LogoOne>web</LogoOne>
          <LogoTwo>dev</LogoTwo>
        </Link>
      </Logo>
    </LogoContainer>
  );
};
