import { useRouter } from 'next/router'
import TheMenu from './components/the-menu'
import OurTeam from './components/our-team';


export default function RestaurantSlug() {
  const router = useRouter();

  return (<>
    {router.asPath == '/restaurant/the-menu' ? <TheMenu /> : ''}
    {router.asPath == '/restaurant/our-team' ? <OurTeam /> : ''}

  </>)
}
