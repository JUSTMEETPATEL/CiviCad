'use client'

import Image from 'next/image'

export function Footer() {
  return (
    (<footer
      id="footer"
      className="flex flex-col md:flex-row bg-[#0a0a0a] text-white py-8 md:py-12">
      <div className="w-full md:w-1/3 px-4 md:ml-12 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-sm md:text-base">Thinking about starting a project or want to learn more about working with us? Please get in touch, we&apos;d love to hear from you.</p>
      </div>
      <div className="flex-1 px-4 md:ml-24">
        {[
          { name: 'Instagram', icon: 'https://civicad.in/icons/instaWhite.png' },
          { name: 'LinkedIn', icon: 'https://civicad.in/icons/linkedWhite.png' },
          { name: 'Email', icon: 'https://civicad.in/icons/mail.png' },
        ].map((social) => (
          <div key={social.name} className="flex items-center mb-4 md:mb-6">
            <Image
              src={social.icon}
              alt={social.name}
              width={40}
              height={40}
              className="md:w-[50px] md:h-[50px]" />
            <p className="ml-4 md:ml-6 text-sm md:text-base">{social.name}</p>
          </div>
        ))}
      </div>
    </footer>)
  );
}