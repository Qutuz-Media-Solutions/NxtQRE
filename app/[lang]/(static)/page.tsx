// import { cache, Suspense } from 'react';

import Logo from '~/components/logo';

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
  const { about, contact } = await import(
    `~/lib/translations/${lang}/nav.json`
  );

  return (
    <div>
      <h1 className="m-5 text-center">
        Example Lang from Page.tsx <br />
        Current Lanugage: {lang} - {about} {contact}
      </h1>
      <Logo />
    </div>
  );
};

export default Home;
