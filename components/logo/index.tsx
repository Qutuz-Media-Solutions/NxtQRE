import Image from 'next/image';
import LogoPic from '~/public/img/logo/medhal-logo.png';

function Logo() {
  return (
    <div className="relative h-full w-full">
      <Image
        src={LogoPic}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt="Medhal Logo"
      />
    </div>
  );
}

export default Logo;
