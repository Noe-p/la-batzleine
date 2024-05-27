import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { ColCenter, H2, ImageFullScreen, RowBetween } from '@/components';
import {
  CHAMBRE1,
  CHAMBRE2,
  ETAGE1,
  FILTERS,
  JARDIN,
  PHOTOS,
  RDC,
  SDB,
} from '@/data';
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  PaginationDot,
  CarouselApi,
  useDotButton,
  CarouselItem,
} from '@/components/ui/carousel';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { CardHover } from '../Cards';

export function Photos(): JSX.Element {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  const [isImageFullScreenOpen, setIsImageFullScreenOpen] = useState<number>();
  const [type, setType] = useState<FILTERS>(FILTERS.JARDIN);
  const [currentImage, setCurrentImage] = useState<string>();

  const photosByType = PHOTOS.filter((photo) => photo.filters.includes(type));

  const handleCardClick = (filter: FILTERS, imageSrc: string) => {
    setType(filter);
    setIsImageFullScreenOpen(0);
    setCurrentImage(imageSrc);
  };

  return (
    <Main id={NavKeys.PHOTOS}>
      <H2>{t(`enums:${NavKeys.PHOTOS}`)}</H2>
      <Carousel setApi={setApi}>
        <RowBetween className='w-full justify-end mt-5 gap-3'>
          <CarouselPrevious
            icon={<ArrowLeftIcon className='w-6' />}
            className='static translate-y-0 rounded-none w-15 h-10'
          />
          <CarouselNext
            icon={<ArrowRightIcon className='w-6' />}
            className='static translate-y-0 rounded-none w-15 h-10'
          />
        </RowBetween>
        <CarouselContent className='mt-3 gap-1'>
          {[
            { filter: FILTERS.JARDIN, image: JARDIN[0].src },
            { filter: FILTERS.RDC, image: RDC[0].src },
            { filter: FILTERS.ETAGE1, image: ETAGE1[0].src },
            { filter: FILTERS.CHAMBRE1, image: CHAMBRE1[0].src },
            { filter: FILTERS.CHAMBRE2, image: CHAMBRE2[0].src },
            { filter: FILTERS.SDB, image: SDB[0].src },
          ].map(({ filter, image }) => (
            <Card key={filter} onClick={() => handleCardClick(filter, image)}>
              <CardHover title={t(`enums:${filter}`)} imageUrl={image} />
            </Card>
          ))}
        </CarouselContent>
        <Pagination>
          {scrollSnaps.map((snap, index) => (
            <PaginationDot
              key={snap}
              onClick={() => onDotButtonClick(index)}
              $isActive={index === selectedIndex}
            />
          ))}
        </Pagination>
      </Carousel>
      <ImageFullScreen
        startIndex={photosByType.findIndex(
          (image) => image.src === currentImage
        )}
        images={photosByType.map((image) => image.src)}
        isOpen={isImageFullScreenOpen !== undefined}
        onClose={() => setIsImageFullScreenOpen(undefined)}
      />
    </Main>
  );
}

const Main = tw(ColCenter)`
  md:py-20 py-10
`;

const Pagination = tw.div`
  flex
  gap-2
  w-full
  justify-center
  mt-5
`;

const Card = tw(CarouselItem)`
  lg:basis-[45%] basis-[100%]
`;
