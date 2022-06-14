import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Navbar, Title } from '../../components';
import { colors } from '../../themes';
import { HomeHeader } from '../components';

export function HomePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main>
      <Navbar />
      <HomeHeader>
        <Title color={colors.white}>{t('La Batzleine')}</Title>
      </HomeHeader>
      <Container />
    </Main>
  );
}

const Main = styled.div`
  z-index: 0;
`;

const Container = styled.div`
  height: 300vh;
  width: 100vw;
  background-color: teal;
`;
