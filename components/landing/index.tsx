import Video from '../video';

function Landing() {
  return (
    <section className="relative h-screen w-screen">
      <div className="absolute z-10 min-h-screen min-w-full bg-gradient-to-b from-[#000000a6] via-[#000000a6] to-[#00000000]" />
      <Video />
      <div className="relative z-10 pt-[25vh]">
        <p className="text-2xl">Mission Statement</p>
        <p>
          We at Midhal love our work and service to horses, and we give in it
          with all the spirit of cooperation and brotherhood, and we always
          aspire to be distinguished in our accommodation and training.
        </p>
      </div>
    </section>
  );
}

export default Landing;
