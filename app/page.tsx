'use client';
import { useAtom } from 'jotai';
import Login from '~/components/login';
import { counter, dataAtom } from './utils/store';

const Home: React.FC = () => {
  const [data, setData] = useAtom(dataAtom);
  const [count] = useAtom(counter);

  return (
    <main>
      This is the {data.name}
      <h1 className="text-4xl text-red-300">The count is: {count}</h1>
      <Login />
    </main>
  );
};

export default Home;
