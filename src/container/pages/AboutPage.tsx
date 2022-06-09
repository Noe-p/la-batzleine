import { useTranslation } from 'next-i18next';
import router from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { Navbar, StyledLink } from '../../components';
import { ROUTES } from '../../routing';

export function AboutPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main>
      <Navbar />
      <h1>{t('about.title')}</h1>
      <p>{t('about.subtitle')}</p>
      <StyledLink onClick={() => router.push(ROUTES.home)}>
        <p>{t('about.link')}</p>
      </StyledLink>
    </Main>
  );
}

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
