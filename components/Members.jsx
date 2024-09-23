'use client'

import Image from 'next/image'
import Link from 'next/link'

const members = [
  { name: 'Sounak Dutta', role: 'CEO', image: 'https://civicad.in/members/SounakDutta.jpg', linkedin: 'http://www.linkedin.com/in/sounak-dutta-bbb4162a6' },
  { name: 'Shayan Hazra', role: 'COO', image: 'https://civicad.in/members/Shayan.jpg', linkedin: 'https://www.linkedin.com/in/shayan-hazra-65402027a' },
  { name: 'Rudransh Basu', role: 'Marketing Head', image: 'https://civicad.in/members/Rudransh.jpg', linkedin: 'https://www.linkedin.com/in/rudransh-basu-63a19a224' },
]

export function Members() {
  return (
    (<div
      id="members"
      className="flex flex-col items-center bg-white border-b-2 border-black py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Members.</h1>
      <div className="flex flex-wrap justify-center">
        {members.map((member) => (
          <Link
            key={member.name}
            href={member.linkedin}
            target="_blank"
            className="flex items-center m-3 md:m-6 p-3 md:p-4 border-2 border-black rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-105">
            <Image
              src={member.image}
              alt={member.name}
              width={75}
              height={75}
              className="rounded-lg object-cover" />
            <div className="ml-3 md:ml-6">
              <h2 className="text-lg md:text-xl font-semibold">{member.name}</h2>
              <p className="text-sm md:text-base">{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>)
  );
}