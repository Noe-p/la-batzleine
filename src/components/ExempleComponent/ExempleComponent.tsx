import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
}

export function ExempleComponent(props: ButtonProps): JSX.Element {
  const { children } = props;

  return <Main>{children}</Main>;
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
