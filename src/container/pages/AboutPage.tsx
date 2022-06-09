import { useTranslation } from 'next-i18next';
import router from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, StyledLink } from '../../components';
import { useModal } from '../../hooks';
import { ROUTES } from '../../routing';
import { Menu } from '../components';

export function AboutPage(): JSX.Element {
  const { t } = useTranslation();
  const { isMenuOpen: isMenuOpen, toggleMenu: toggleMenuMenu } = useModal();
  const [isMenuAnimate, setIsMenuAnimate] = useState(true);

  return (
    <Main>
      <Navbar
        setIsMenuAnimate={setIsMenuAnimate}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenuMenu}
      />
      <Menu isMenuAnimate={isMenuAnimate} isMenuOpen={isMenuOpen} />
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
