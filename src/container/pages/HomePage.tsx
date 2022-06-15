import styled from 'styled-components';
import { Navbar } from '../../components';
import { HomeHeader } from '../components';

export function HomePage(): JSX.Element {
  return (
    <Main>
      <Navbar />
      <HomeHeader />
      <Container />
    </Main>
  );
}

const Main = styled.div`
  z-index: 0;
`;

const Container = styled.div`
  height: 300vh;
  background-color: teal;
  z-index: 0;
`;
