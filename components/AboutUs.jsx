'use client'

export function AboutUs() {
  return (
    (<div
      id="aboutus"
      className="flex flex-col md:flex-row justify-around items-center min-h-[50vh] bg-white border-b-2 border-black py-8 md:py-0">
      <div className="w-full md:w-1/2 px-4 md:ml-24 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold">AboutUs &gt;&gt;</h1>
      </div>
      <div
        className="w-full md:w-2/3 px-4 md:mr-24 flex flex-col justify-around rounded-lg p-6 md:p-12 shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Designing Spaces That Reflect Your Vision</h3>
        <p className="text-sm md:text-base">
          Civicad is a fast-growing architectural firm, started in 2024 as an MSME startup. We specialize in designing
          buildings that reflect the best qualities of our clients and their surroundings. Our team comprises of innovative
          and skilled professionals who are passionate about creating exceptional spaces that withstand the test of time.
          We believe in pushing boundaries, taking on challenges, and designing buildings that make a positive impact on society.
        </p>
      </div>
    </div>)
  );
}