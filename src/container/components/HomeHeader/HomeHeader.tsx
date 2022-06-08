import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../../themes';

interface HomeHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function HomeHeader(props: HomeHeaderProps): JSX.Element {
  const { children, className } = props;

  return <Main className={className}>{children}</Main>;
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  height: 100vh;
  width: 100vw;
`;
