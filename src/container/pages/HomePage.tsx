import { useTranslation } from 'next-i18next';
import router from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../components';
import { ROUTES } from '../../routing';

export function HomePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main>
      {t('langage')}
      <h1>{t('home.title')}</h1>

      <StyledLink onClick={() => router.push(ROUTES.about)}>
        <p>{t('home.link')}</p>
      </StyledLink>
      <StyledLink onClick={() => router.push(ROUTES.dynamicPage)}>
        <p>{t('dynamicPage')}</p>
      </StyledLink>
    </Main>
  );
}

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
