import { cache, Suspense } from 'react';
import Login from '~/components/login';
import TimeCounter from '~/components/time-counter';

// Example Data Fetching in Next
const getCatFact = cache(async () => {
  await fetch('https://hub.dummyapis.com/delay?seconds=5', {
    cache: 'no-cache',
  });

  const fact = await fetch('https://catfact.ninja/fact', {
    next: { revalidate: 10 },
  });

  return fact.json();
});

const Home = async () => {
  const fact: any = await getCatFact();

  return (
    <div className="m-auto h-full text-center">
      <TimeCounter />
      <Suspense fallback={<p>Loading a cat fact</p>}>
        <p>{fact.fact}</p>
      </Suspense>
      <Login />
    </div>
  );
};

export default Home;
