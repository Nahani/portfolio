import Image from 'next/image';

export function ProfileImage() {

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
        <div className="relative h-[300px] w-[300px]">
          <Image
            src="/images/nolanpotier.jpg"
            alt="Profile"
            className="rounded-full border-4 border-background object-cover shadow-xl transition-opacity duration-300"
            width={397}
            height={551}
            priority
            sizes="(max-width: 768px) 397px, 551px"
          />
        </div>
      </div>
    </div>
  );
} 