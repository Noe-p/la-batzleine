import { ColCenter, Grid4, P16 } from '@/components';
import { Bed, Dog, Users, Wifi } from 'lucide-react';
import tw from 'tailwind-styled-components';

export function Stat(): JSX.Element {
  return (
    <Main>
      <ColCenter className='gap-2'>
        <Dog className='text-primary-foreground' size={40} />
        <P16 className='text-primary-foreground'>{'Animaux Accepté'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Users className='text-primary-foreground' size={40} />
        <P16 className='text-primary-foreground'>{'4 Personnes'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Bed className='text-primary-foreground' size={40} />
        <P16 className='text-primary-foreground'>{'2 Chambres'}</P16>
      </ColCenter>
      <ColCenter className='gap-2'>
        <Wifi className='text-primary-foreground' size={40} />
        <P16 className='text-primary-foreground'>{'Clée Wifi'}</P16>
      </ColCenter>
    </Main>
  );
}

const Main = tw(Grid4)`
  bg-primary
  md:my-20 mb-10
  p-8
  rounded-lg
  shadow-lg
  w-full
  grid-cols-2
`;
