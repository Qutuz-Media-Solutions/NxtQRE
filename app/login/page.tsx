import Image from 'next/image';
import bgImage from '../../public/bridge-nyc.jpeg';

const Login: React.FC = () => {
  return (
    <section className="h-full w-full grid grid-cols-2">
      <div className="relative">
        <Image
          src={bgImage}
          alt=""
          fill={true}
          style={{ objectFit: 'cover', opacity: '0.65' }}
        />
      </div>
      <div className="bg-slate-400 text-center py-16">
        <h1 className="text-4xl">Login</h1>
        <form className="bg-zinc-300 w-2/3 m-auto h-5/6 rounded-md">
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
