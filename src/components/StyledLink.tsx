import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface StyledLinkProps {
  children?: ReactNode;
  onClick?: () => void;
}

export function StyledLink(props: StyledLinkProps): JSX.Element {
  const { children } = props;

  return <Main {...props}>{children}</Main>;
}

const Main = styled.a`
  color: blue;

  &:hover {
    cursor: pointer;
  }
`;
