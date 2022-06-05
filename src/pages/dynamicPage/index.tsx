import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import router from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../components';
import { ROUTES } from '../../routing';
import { PageBaseProps } from '../../types';

export default function index(): JSX.Element {
  return (
    <Main>
      <StyledLink onClick={() => router.push(`${ROUTES.dynamicPage}/${1}`)}>
        {'Page 1'}
      </StyledLink>
      <StyledLink onClick={() => router.push(`${ROUTES.dynamicPage}/${2}`)}>
        {'Page 2'}
      </StyledLink>
    </Main>
  );
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<PageBaseProps> {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
