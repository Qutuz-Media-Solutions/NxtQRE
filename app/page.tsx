import HomePage from '@/home-page';
import CatCard from 'components/cards/cat';
import Image from 'next/image';
import { mockCatCardProps } from 'stories/components/cards/cat/index.mock';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return <HomePage />;
};

export default Home;
