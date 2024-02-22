import { useRouter } from 'next/router'
import TheMenu from './components/the-menu'
import OurTeam from './components/our-team';
import Gallery from './components/gallery';


export default function RestaurantSlug() {
  const router = useRouter();

  return (<>
    {router.asPath == '/restaurant/the-menu' ? <TheMenu /> : ''}
    {router.asPath == '/restaurant/gallery' ? <Gallery /> : ''}

  </>)
}
