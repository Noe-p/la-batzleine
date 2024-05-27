import React, { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import { useDebounceValue, useHover, useMediaQuery } from 'usehooks-ts';
import { Card } from '@/components/ui/card';
import { H3, P16 } from '@/components/Texts';
import { IMAGE_FALLBACK, MEDIA_QUERIES } from '@/static/constants';
import { Fullscreen } from 'lucide-react';

interface CardHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl?: string;
}

export function CardHover(props: CardHoverProps): JSX.Element {
  const { title, imageUrl = IMAGE_FALLBACK, className, ...rest } = props;
  const hoverRef = useRef(null);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.MD);

  const isHover = useHover(hoverRef) || !isDesktop;
  const [debouncedValue, setValue] = useDebounceValue(isHover, 100);

  useEffect(() => {
    setValue(isHover);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover]);

  return (
    <div ref={hoverRef} {...rest}>
      <CardStyled className={className}>
        <Image $isHover={isHover} src={imageUrl} alt='home' />
        <TextContainer $isHover={isHover}>
          <Title $isHover={isHover}>{title}</Title>
        </TextContainer>
        <SeeMoreContainer $isHover={debouncedValue && isHover}>
          <P16 className='text-white text-xs md:text[p18px]'>
            {'Voir plus de photos'}
          </P16>
          <Fullscreen size={16} color='white' />
        </SeeMoreContainer>
        <Filter $isHover={isHover} />
      </CardStyled>
    </div>
  );
}

const CardStyled = tw(Card)`
  relative
  cursor-pointer
  overflow-hidden
  w-full h-full
  max-h-100
`;

const Filter = tw.div<{ $isHover: boolean }>`
  absolute 
  top-0
  left-0
  w-full 
  h-full 
  bg-gradient-to-br from-primary/80 via-transparent to-transparent
  duration-300 
  ease-in-out
  opacity-40
  ${(props) => props.$isHover && 'opacity-100'}
`;

const Image = tw.img<{ $isHover: boolean }>`
  w-full
  object-fill
  h-100
  transition-transform 
  duration-300 
  ease-in-out
  scale-100
  ${(props) => props.$isHover && 'scale-105'}
`;

const TextContainer = tw.div<{ $isHover: boolean }>`
  z-10
  absolute 
  top-[calc(100%-3rem)]
  w-[calc(100%-3rem)]
  left-3
  transition-all
  duration-300 
  ease-in-out
  ${(props) => props.$isHover && 'top-3 md:top-5'}
`;

const Title = tw(H3)<{ $isHover: boolean }>`
  transition-all
  w-fit
  duration-300 
  ease-in-out
  text-white
  rounded-full
  p-0 md:p-2
  text-2xl
  ${(props) => props.$isHover && 'text-2xl md:text-3xl font-semibold'}
`;

const SeeMoreContainer = tw.div<{ $isHover: boolean }>`
  flex
  items-center
  gap-1 hover:gap-2
  justify-end
  transition-all
  duration-300 
  ease-in-out
  opacity-0
  -translate-y-10
  ${(props) => props.$isHover && 'opacity-100 translate-y-0'}
  absolute
 
  bottom-2 md:bottom-3
  right-2 md:right-3
  w-fit
  z-10
  bg-primary/40
  backdrop-blur-md
  rounded
  px-2
  py-1
`;
