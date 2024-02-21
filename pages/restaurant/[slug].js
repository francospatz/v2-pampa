import { useRouter } from 'next/router'
import TheMenu from './components/the-menu'


export default function RestaurantSlug() {
  const router = useRouter();

  return (<>{router.asPath == '/restaurant/the-menu' ? <TheMenu /> : ''}</>)
}
