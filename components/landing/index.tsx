import Video from '../video';

function Landing() {
  return (
    <section className='relative h-screen'>
      <Video />
      <div className="absolute min-h-full h-full min-w-full bg-gradient-to-b from-[#000000a6] via-[#000000a6] to-[#00000000]" />
      <div className="relative z-20 pt-[25vh]">
        <p className='text-2xl'>Our message</p>
        <p>We in Midhal love our work and service to horses, and we give in it with all the spirit of cooperation and brotherhood, and we always aspire to be distinguished in our accommodation and training.</p>
      </div>
    </section>
  );
}

export default Landing;
