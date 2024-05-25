import { ColCenter, Grid4, P16 } from '@/components';
import { Bed, Dog, Users, Wifi } from 'lucide-react';
import tw from 'tailwind-styled-components';

export function Stat(): JSX.Element {
  return (
    <Main>
      <ColCenter className='gap-2'>
        <Dog size={40} />
        <P16>{'Animaux Accepté'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Users size={40} />
        <P16>{'4 Personnes'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Bed size={40} />
        <P16>{'2 Chambres'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Wifi size={40} />
        <P16>{'Clée Wifi'}</P16>
      </ColCenter>
    </Main>
  );
}

const Main = tw(Grid4)`
  bg-card
  my-20
  p-8
  rounded-lg
  shadow-lg
  w-full
  grid-cols-2
`;
