import { Layout } from '@/components';
import { Header } from '@/container/components';
import {
  Carte,
  Description,
  Equipements,
  Photos,
  Stat,
  Tarifs,
  Testimonials,
} from '../components/Sections';
import { Separator } from '@/components/ui/separator';
import { TESTIMONIALS } from '@/data';
export function HomePage(): React.JSX.Element {
  return (
    <Layout>
      <Header />
      <Description />
      <Stat />
      <Equipements />
      <Photos />
      <Carte />
      {TESTIMONIALS.length > 0 && <Testimonials />}
      <Separator className='md:w-1/3 w-1/2' />
      <Tarifs />
    </Layout>
  );
}
