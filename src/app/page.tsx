import { Navigation } from '@/components/shared/navigation';
import Landing from '@/containers/landing';

export default async function Home() {
  return (
    <>
      <Navigation />
      <Landing />
    </>
  )
}
