import { ColCenter, H2, Layout, P12, P14, P16, Row } from '@/components';
import { Card } from '@/components/ui/card';
import { TESTIMONIALS } from '@/data';
import { ArrowLeft, Quote } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../components/Navbar';
import { ROUTES } from '@/routes';

export function Testimonials(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout isNavClose={false}>
      <Main>
        <Row className='flex w-full'>
          <Link
            className='flex gap-1 w-fit'
            href={`${ROUTES.home}#${NavKeys.TESTIMONIALS}`}
          >
            <ArrowLeft size={24} />
            <P16>{t('generics.back')}</P16>
          </Link>
        </Row>
        <H2 className='my-5'>{t('testimonials.title')}</H2>
        <ResponsiveMasonry
          className='w-full'
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter='10px'>
            {TESTIMONIALS.map((testimonial) => (
              <Card
                key={testimonial.id}
                className='p-4 rounded border h-min border-primary lg:basis-[28%] md:basis-[45%] basis-[100%]'
              >
                <Quote className='w-6 h-6 text-primary' />
                <P14
                  className='mt-3'
                  dangerouslySetInnerHTML={{ __html: testimonial.content }}
                />
                <Row className='justify-end mt-5'>
                  <P12 className='italic'>{`${testimonial?.name ?? ''}${
                    testimonial?.date && ', '
                  }${testimonial?.date}`}</P12>
                </Row>
              </Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Main>
    </Layout>
  );
}

const Main = tw(ColCenter)`
  w-full
  py-20
  justify-center
  mt-5
`;
