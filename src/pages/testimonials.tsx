import { LayoutPage } from '@/components';
import { Testimonials } from '@/container/pages';
import { PageBaseProps } from '@/types';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function IndexPage(): React.JSX.Element {
  const { t } = useTranslation();
  const title = t('metas:testimonials.title');
  const description = t('metas:testimonials.description');
  const keywords = t('metas:testimonials.keywords');

  return (
    <LayoutPage title={title} description={description} keywords={keywords}>
      <Testimonials />
    </LayoutPage>
  );
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<PageBaseProps> {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
