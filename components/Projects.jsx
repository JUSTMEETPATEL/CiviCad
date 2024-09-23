'use client'

import Image from 'next/image'

export function Projects() {
  const projectImages = Array.from({ length: 11 }, (_, i) => `/Projects/Orh/${i + 1}.png`)

  return (
    (<div
      id="projects"
      className="flex flex-col items-center bg-white border-b-2 border-black py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4"><a href="#" className="hover:underline">Projects &gt;&gt;</a></h1>
      <p className="mb-4">ORH PROJECT</p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide">
          {[...projectImages, ...projectImages].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              width={150}
              height={150}
              className="mx-3 md:mx-6 my-3 md:my-6 rounded-lg border border-black filter saturate-25 hover:saturate-100 transition-all duration-200" />
          ))}
        </div>
      </div>
    </div>)
  );
}