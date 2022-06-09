/* eslint-disable indent */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../routing';
import { colors, fontFamily, fontSizes, MEDIA_QUERIES } from '../../themes';
import { FullModal } from '../Modals';

interface MenuProps {
  isMenuOpen: boolean;
  isMenuAnimate: boolean;
}

export function Menu(props: MenuProps): JSX.Element {
  const { isMenuOpen, isMenuAnimate } = props;
  const [isMouseOnTitle, setIsMouseOnTitle] = useState(false);
  const [isMenuAnimationFinish, setIsMenuAnimationFinish] = useState(false);
  const imageContainer = useRef<HTMLHeadingElement>(null);
  const router = useRouter();

  const linksList = [
    {
      label: 'La maison',
      image: 'home-cinema.png',
      routes: ROUTES.home,
    },
    { label: 'City Garden', image: 'salon.png', routes: ROUTES.about },
    { label: 'About', image: 'home-cinema.png', routes: '#' },
    { label: 'Contact', image: 'salon.png', routes: '#' },
    {
      label: 'Reserver',
      image: 'home-cinema.png',
      routes: '#',
    },
  ];

  function onMouseHover(index: number) {
    setIsMouseOnTitle(!isMouseOnTitle);
    imageContainer.current?.children[index].children[0].classList.toggle(
      'backgroundVisible'
    );
  }

  //Ne pas lancer l'animation des images tant que l'animation du menu n'est pas terminée
  useEffect(() => {
    if (!isMenuAnimationFinish && isMenuOpen)
      setTimeout(() => setIsMenuAnimationFinish(true), 1300);
    if (!isMenuAnimate) setIsMenuAnimationFinish(false);
  }, [isMenuAnimationFinish, isMenuOpen, isMenuAnimate]);

  return (
    <FullModal isMenuOpen={isMenuOpen} isMenuAnimate={isMenuAnimate}>
      <Main>
        <Background
          ref={imageContainer}
          $isPossibleToShowBackground={isMouseOnTitle && isMenuAnimationFinish}
        >
          {linksList.map((link) => (
            <Image
              layout='fill'
              key={link.label}
              src={`/images/${link.image}`}
              alt={link.image}
            />
          ))}
        </Background>
        <TitleContainer $isAnimate={isMenuOpen}>
          {linksList.map((link, i) => (
            <a
              onMouseOut={() => onMouseHover(i)}
              onMouseOver={() => onMouseHover(i)}
              key={link.label}
              href={link.routes}
              className={router.asPath === link.routes ? 'currentTitle' : ''}
            >
              {link.label}
            </a>
          ))}
        </TitleContainer>
      </Main>
    </FullModal>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.spcaceCadet};
`;

const Background = styled.div`
  position: absolute;
  z-index: 32;
  width: 100%;
  height: 100%;

  img {
    opacity: 0;
    transform: scale(1);
    transition: all 0.5s;
    object-fit: cover;
    visibility: hidden;

    &.backgroundVisible {
      opacity: ${(props: { $isPossibleToShowBackground: boolean }) =>
        props.$isPossibleToShowBackground ? '1' : '0'};
      transform: scale(1.05);
      visibility: inherit;
    }
  }
`;

const TitleContainer = styled.div`
  z-index: 34;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.spcaceCadetTransparent};

  a {
    color: ${colors.white};
    font-size: ${fontSizes.xxl};
    font-family: ${fontFamily.cormorant};
    font-weight: normal;
    text-transform: uppercase;
    margin: 0px;
    position: relative;
    line-height: ${fontSizes.xxl};
    text-decoration: none;
    opacity: 0.4;
    transition: all 0.4s;

    transform: translateY(-100px);
    animation: ${(props: { $isAnimate: boolean }) =>
      props.$isAnimate ? 'translateYTitleIn' : 'none'};
    animation-fill-mode: forwards;
    animation-delay: 0.2s;

    &.currentTitle,
    :hover {
      opacity: 1;
    }

    @media ${MEDIA_QUERIES.MOBILE} {
      font-size: ${fontSizes.mobxxl};
      line-height: ${fontSizes.mobxxl};
      margin-top: 15px;
      margin-bottom: 15px;
    }

    :after {
      width: 100%;
      bottom: 0;
      background-color: ${colors.spcaceCadet};
      display: block;
      position: absolute;
      content: '';

      height: 100%;
      animation: ${(props: { $isAnimate: boolean }) =>
        props.$isAnimate ? 'translateYIn' : 'none'};
      animation-fill-mode: forwards;
      animation-delay: 0.3s;
    }

    :nth-child(1),
    :nth-child(1)::after {
      animation-duration: 0.4s;
    }
    :nth-child(2),
    :nth-child(2)::after {
      animation-duration: 0.6s;
    }
    :nth-child(3),
    :nth-child(3)::after {
      animation-duration: 0.8s;
    }
    :nth-child(4),
    :nth-child(4)::after {
      animation-duration: 1s;
    }
    :nth-child(5),
    :nth-child(5)::after {
      animation-duration: 1.2s;
    }

    @keyframes translateYIn {
      from {
        height: 100%;
      }
      to {
        height: 0%;
      }
    }

    @keyframes translateYTitleIn {
      from {
        transform: translateY(-100px);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`;
