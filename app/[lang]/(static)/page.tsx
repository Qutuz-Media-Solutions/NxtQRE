// import { cache, Suspense } from 'react';
// import Login from '~/components/login';
// import TimeCounter from '~/components/time-counter';

import Footer from '~/components/footer';
import Landing from '~/components/landing';

// Example Data Fetching in Next
// const getCatFact = cache(async () => {
//   await fetch('https://hub.dummyapis.com/delay?seconds=5', {
//     cache: 'no-cache',
//   });

//   const fact = await fetch('https://catfact.ninja/fact', {
//     next: { revalidate: 10 },
//   });

//   return fact.json();
// });

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

const Home = async ({ params: { lang } }: any) => {
  const { about, contact, coaches } = await import(
    `@/meta/translations/${lang}/nav.json`
  );
  // const fact: any = await getCatFact();

  return (
    <div>
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
