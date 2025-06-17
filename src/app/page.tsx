import { Navigation } from '@/components/shared/navigation';
import Landing from '@/containers/landing';
import { Footer } from '@/components/shared/footer';
export default async function Home() {
  return (
    <>
      <Navigation />
      <Landing />
      <Footer />
    </>
  )
}
