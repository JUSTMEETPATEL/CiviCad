'use client'

import Image from 'next/image'

export function Clients() {
  return (
    (<div
      id="clients"
      className="flex flex-col items-center bg-white border-b-2 border-black py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Clients.</h1>
      <div className="clientLogos">
        <Image
          src="https://civicad.in/Clients/southEasternRailway.png"
          alt="South Eastern Railway"
          width={100}
          height={100}
          className="filter saturate-0 rounded-full border border-black" />
      </div>
    </div>)
  );
}