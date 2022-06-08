import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Title } from '../../components';
import { useModal } from '../../hooks';
import { colors } from '../../themes';
import { HomeHeader, Menu } from '../components';

export function HomePage(): JSX.Element {
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
      <HomeHeader>
        <Title color={colors.black}>{t('La Batzleine')}</Title>
      </HomeHeader>
    </Main>
  );
}

const Main = styled.div`
  z-index: 0;
`;
