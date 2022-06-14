import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontFamily, fontSizes, MEDIA_QUERIES } from '../../themes';

interface TitleProps {
  children?: ReactNode;
  className?: string;
  color: string;
}

interface StyledProps {
  $color: string;
}

export function Title(props: TitleProps): JSX.Element {
  const { children, className, color } = props;
  return (
    <Main $color={color} className={className}>
      {children}
    </Main>
  );
}

const Main = styled.h1`
  color: ${(props: StyledProps) => props.$color};
  font-size: ${fontSizes.xxl};
  font-family: ${fontFamily.cormorant};
  font-weight: normal;

  @media ${MEDIA_QUERIES.MOBILE} {
    font-size: ${fontSizes.mobxxl};
  }
`;
