import React from 'react';
import styled from 'styled-components';

interface FirstPageProps {
  idPage: string;
  className?: string;
}

export function FirstPage(props: FirstPageProps): JSX.Element {
  const { idPage, className } = props;

  return (
    <Main className={className}>
      <p>{`Ceci est la page d'id : ${idPage}`}</p>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
