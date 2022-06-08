/* eslint-disable indent */
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuAnimate: (ele: boolean) => void;
}

interface StyledProps {
  $isOpen: boolean;
}

export function Navbar(props: NavbarProps): JSX.Element {
  const { isMenuOpen, toggleMenu, setIsMenuAnimate } = props;

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
    <Main>
      <a className='logo' href='#' onClick={isMenuOpen ? onClick : undefined}>
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
      <MenuButton $isOpen={isMenuOpen} onClick={onClick}>
        <div className={`topBorder ${isMenuOpen ? 'isOpen' : ''}`} />
        <div className={`bottomBorder ${isMenuOpen ? 'isOpen' : ''}`} />
      </MenuButton>
    </Main>
  );
}

const Main = styled.div`
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
  height: ${(props: StyledProps) => (props.$isOpen ? '40px' : '13px')};
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
    background-color: ${(props: StyledProps) =>
      props.$isOpen ? colors.white : colors.black};
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
