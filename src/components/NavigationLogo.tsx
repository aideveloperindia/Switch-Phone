'use client';

import Image from 'next/image';

export default function NavigationLogo() {
  return (
    <Image
      src="/logo.svg"
      alt="Switch-Phone"
      width={40}
      height={40}
      className="h-10 w-10"
      priority
    />
  );
}
