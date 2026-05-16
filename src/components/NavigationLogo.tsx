'use client';

export default function NavigationLogo() {
  return (
    // Plain img: logo.svg is empty; next/image + SVG breaks in Safari
    <img
      src="/switchphone.png"
      alt="Switch-Phone"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
      decoding="async"
    />
  );
}
