import Video from '../video';

function Landing() {
  return (
    <section className="relative h-screen w-screen">
      <div className="absolute z-10 min-h-screen min-w-full bg-gradient-to-b from-[#000000a6] via-[#000000a6] to-[#00000000]" />
      <Video />
    </section>
  );
}

export default Landing;
