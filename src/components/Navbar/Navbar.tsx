/* eslint-disable indent */
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../hooks';
import { ROUTES } from '../../routing';
import { colors, MEDIA_QUERIES } from '../../themes';
import { Menu } from '../Menu';

export function Navbar(): JSX.Element {
  const { isMenuOpen, toggleMenu } = useModal();
  const [isMenuAnimate, setIsMenuAnimate] = useState(true);

  function onClick() {
    if (isMenuOpen) {
      setIsMenuAnimate(false);
      setTimeout(toggleMenu, 600);
    } else {
      setIsMenuAnimate(true);
      toggleMenu();
    }
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
        <MenuButton $isMenuOpen={isMenuOpen} onClick={onClick}>
          <div className={`topBorder ${isMenuOpen ? 'isOpen' : ''}`} />
          <div className={`bottomBorder ${isMenuOpen ? 'isOpen' : ''}`} />
        </MenuButton>
      </NavBarStyled>
      <Menu isMenuAnimate={isMenuAnimate} isMenuOpen={isMenuOpen} />
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

const MenuButton = styled.a`
  position: relative;
  height: ${(props: { $isMenuOpen: boolean }) =>
    props.$isMenuOpen ? '40px' : '13px'};
  width: 40px;

  &:hover {
    cursor: pointer;
  }

  .topBorder,
  .bottomBorder {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${(props: { $isMenuOpen: boolean }) =>
      props.$isMenuOpen ? colors.white : colors.black};
    transform: rotate(0);
    transition: transform 0.3s;
  }

  .topBorder {
    top: 0;

    &.isOpen {
      transform: rotate(45deg);
      top: 50%;
    }
  }
  .bottomBorder {
    top: 100%;

    &.isOpen {
      transform: rotate(-45deg);
      top: 50%;
    }
  }
`;
