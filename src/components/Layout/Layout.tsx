import { Footer, NavBar } from '@/container/components';
import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
  isNavClose?: boolean;
}

export function Layout(props: LayoutProps): React.JSX.Element {
  const { children, className, isNavClose } = props;

  return (
    <Main>
      <NavBar isClose={isNavClose} />
      <Page className={className}>
        {children}
        <Footer />
      </Page>
    </Main>
  );
}

const Main = tw.div`
  bg-background
`;

const Page = tw.div`
  flex
  flex-col
  items-center
  justify-center
  z-0
  min-h-screen
  px-3 md:px-20
`;
