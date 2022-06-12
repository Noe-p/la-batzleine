/* eslint-disable indent */

import { ToggleMenuButton } from '@noe-p/react-buttons-components';
import { FullScreenMenu, LinkMenuType } from '@noe-p/react-menus-components';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../routing';
import { colors, fontFamily, fontSizes, MEDIA_QUERIES } from '../../themes';

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksList: LinkMenuType[] = [
    {
      label: 'La maison',
      image: '/images/home-cinema.png',
      routes: ROUTES.home,
    },
    { label: 'City Garden', image: '/images/salon.png', routes: ROUTES.about },
    { label: 'About', image: '/images/home-cinema.png', routes: '#' },
    { label: 'Contact', image: '/images/salon.png', routes: '#' },
    {
      label: 'Reserver',
      image: '/images/home-cinema.png',
      routes: '#',
    },
  ];

  function onClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <NavBarStyled>
        <a
          className='logo'
          href={ROUTES.home}
          onClick={isMenuOpen ? onClick : undefined}
        >
          <Image
            src={
              isMenuOpen
                ? '/logos/logo-baleine-white.svg'
                : '/logos/logo-baleine-black.svg'
            }
            width={70}
            height={70}
            alt='logo'
          />
        </a>
        <ToggleMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          colorOpen={colors.white}
          colorClose={colors.black}
          width={50}
        />
      </NavBarStyled>
      <FullScreenMenu
        backgroundColor={colors.spcaceCadet}
        transparentBackgroundColor={colors.spcaceCadetTransparent}
        linksList={linksList}
        isMenuOpen={isMenuOpen}
        titleColor={colors.white}
        titleFontSize={fontSizes.xxl}
        titleFontfamily={fontFamily.cormorant}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding-inline: 5%;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  width: 90vw;
  height: 100px;
  z-index: 100000;

  @media ${MEDIA_QUERIES.MOBILE} {
    height: 110px;
  }

  a {
    text-decoration: none;
  }

  .logo {
    transform: rotate(0);
    transition: 0.9s;
    transition-timing-function: ease-in-out;
  }

  .logo:hover {
    transform: rotate(360deg);
  }
`;
