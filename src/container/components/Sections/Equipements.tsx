import {
  Col,
  Image,
  ColCenter,
  Grid2,
  H2,
  P18,
  Row,
  RowBetween,
} from '@/components';
import { useTranslation } from 'next-i18next';
import { NavKeys } from '../Navbar';
import { Check } from 'lucide-react';
import tw from 'tailwind-styled-components';
import { JARDIN } from '@/data';

export function Equipements(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main id={NavKeys.EQUIPEMENTS}>
      <RowBetween className='items-center gap-10 pl-10 lg:pl-0 pr-10'>
        <ImageStyled {...JARDIN[2]} />
        <ColCenter>
          <H2 className='text-primary-foreground'>
            {t(`enums:${NavKeys.EQUIPEMENTS}`)}
          </H2>
          <TextContainer>
            <ColItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item1')}</Label>
              </ListItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item2')}</Label>
              </ListItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item3')}</Label>
              </ListItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item4')}</Label>
              </ListItem>
            </ColItem>
            <ColItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item5')}</Label>
              </ListItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item6')}</Label>
              </ListItem>
              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item7')}</Label>
              </ListItem>

              <ListItem>
                <Check className='w-5 h-5 text-primary-foreground' />
                <Label>{t('equipements.list.item8')}</Label>
              </ListItem>
            </ColItem>
          </TextContainer>
        </ColCenter>
      </RowBetween>
    </Main>
  );
}

const Main = tw(ColCenter)`
  w-full
  justify-center
  bg-gradient-to-b from-primary to-primary/90

  rounded-lg
  lg:h-150
  py-20 lg:py-0
  overflow-hidden
`;

const TextContainer = tw(Grid2)`
  h-full
  md:border
  border-primary-foreground
  md:p-10
  rounded
  h-fit
  mt-10
`;

const ColItem = tw(Col)`
  justify-between
  h-full
  gap-2
`;

const ListItem = tw(Row)`
  items-center
  justify-start
  w-full
`;

const Label = tw(P18)`
  ml-2
  text-primary-foreground
`;

const ImageStyled = tw(Image)`
  w-full
  h-full
  hidden
  w-1/2
  lg:block
  h-150
  rounded-none
`;
