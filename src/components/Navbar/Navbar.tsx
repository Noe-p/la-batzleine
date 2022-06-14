/* eslint-disable indent */

import { ToggleTextButton } from '@noe-p/react-buttons-components';
import { FullScreenMenu, LinkMenuType } from '@noe-p/react-menus-components';
import { useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../routing';
import { colors, fontFamily, fontSizes, MEDIA_QUERIES } from '../../themes';

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [delay, setDelay] = useState(false);
  const linksList: LinkMenuType[] = [
    {
      label: 'La maison',
      image: '/images/home-cinema.png',
      route: ROUTES.home,
    },
    { label: 'City Garden', image: '/images/salon.png', route: ROUTES.about },
    { label: 'About', image: '/images/home-cinema.png', route: '#' },
    { label: 'Contact', image: '/images/salon.png', route: '#' },
    {
      label: 'Reserver',
      image: '/images/home-cinema.png',
      route: '#',
    },
  ];

  function onPressMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setTimeout(() => setDelay(!delay), 500);
    else setTimeout(() => setDelay(!delay), 0);
  }

  return (
    <>
      <NavBarStyled $isMenuOpen={delay}>
        <a className='logo' href={ROUTES.home}>
          <img
            src={'/logos/logo-baleine-black.svg'}
            width={70}
            height={70}
            alt='logo'
          />
        </a>
        <ToggleTextButton
          onClick={onPressMenu}
          isMenuOpen={delay}
          closeColor={'white'}
          openColor={'white'}
          fontFamily={fontFamily.cormorant}
          textClose={'Fermer'}
          mobileFontSize={'30px'}
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

const NavBarStyled = styled.nav`
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
    transition-property: transform;
    transition-timing-function: ease-in-out;
    filter: invert(100%);
    /* filter: ${(props: { $isMenuOpen: boolean }) =>
      props.$isMenuOpen ? 'invert(100%)' : 'invert(0)'}; */
  }

  .logo:hover {
    transform: rotate(360deg);
  }
`;
