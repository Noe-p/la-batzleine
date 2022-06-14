import { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../../themes';

interface HomeHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function HomeHeader(props: HomeHeaderProps): JSX.Element {
  const { children, className } = props;
  const vidRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    vidRef?.current?.play();
  }, []);

  return (
    <Main className={className}>
      <video
        ref={vidRef}
        autoPlay={true}
        width={'100%'}
        loop
        height={'100%'}
        muted
      >
        <source src='/videos/videoHeader.mp4' type='video/mp4' />
      </video>
      <div className='filter'>{children}</div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.spcaceCadetTransparent};
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  video {
    object-fit: cover;
    position: fixed;
    position: absolute;
  }
`;
