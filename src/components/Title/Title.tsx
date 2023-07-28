import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
}

const StyledTitle = styled.h1`
  font-size: 32px;
  padding: 16px 3px;
  font-weight: bold;
  color: #fff;
`;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
