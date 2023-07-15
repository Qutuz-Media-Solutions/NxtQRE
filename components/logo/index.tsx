import Image from 'next/image';

function Logo() {
  return (
    <div className="absolute h-full w-full">
      <Image
        src="https://images.unsplash.com/photo-1573082987491-217b12b67990"
        fill
        style={{ objectFit: 'cover' }}
        // sizes="(max-width: 768px) 100vw,
        //       (max-width: 1200px) 50vw,
        //       33vw"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
