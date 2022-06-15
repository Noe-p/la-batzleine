import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Title } from '../../../components';
import { colors } from '../../../themes';

interface HomeHeaderProps {
  className?: string;
}

export function HomeHeader(props: HomeHeaderProps): JSX.Element {
  const { className } = props;
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
      <Header>
        <Title color={colors.white}>{'La Batzleine'}</Title>
      </Header>
    </Main>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.spcaceCadetTransparent};
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;

  video {
    object-fit: cover;
    position: fixed;
    position: absolute;
  }
`;
