/* eslint-disable indent */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useScrollBlock } from '../../hooks';

interface FullModalProps {
  isMenuOpen: boolean;
  children?: ReactNode;
  isMenuAnimate: boolean;
}
interface StyledProps {
  $isMenuOpen: boolean;
}

export function FullModal(props: FullModalProps): JSX.Element {
  const { isMenuOpen, children, isMenuAnimate } = props;
  const [blockScroll, allowScroll] = useScrollBlock();
  isMenuOpen ? blockScroll() : allowScroll();

  return isMenuOpen ? (
    <Main $isMenuOpen={isMenuAnimate}>
      <div className='modal-wrapper'>{children}</div>
    </Main>
  ) : (
    <></>
  );
}

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;

  .modal-wrapper {
    z-index: 1050;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${(props: StyledProps) =>
      props.$isMenuOpen ? 'slideIn' : 'slideOut'};
    animation-duration: 0.7s;
    overflow: hidden;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @keyframes slideIn {
    from {
      height: 0%;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }

  @keyframes slideOut {
    to {
      height: 0%;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }
`;
