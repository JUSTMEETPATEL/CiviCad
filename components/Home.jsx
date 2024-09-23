'use client';
import { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    (<div
      id="home"
      ref={ref}
      className="relative h-screen border-b-2 border-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://civicad.in/images/sergey-leont-ev-xgnVtowBZ0c-unsplash.jpg')" }} />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent">
        <div className="flex flex-col items-end justify-center h-full pr-4 md:pr-24">
          <h1
            className="text-6xl md:text-9xl font-bold text-white hover:text-[10vw] transition-all duration-200">Civicad.</h1>
          <h3 className="text-xl md:text-2xl text-white">Transforming Spaces,</h3>
          <h3 className="text-xl md:text-2xl text-white">Enhancing Lives.</h3>
        </div>
      </div>
    </div>)
  );
})

Home.displayName = 'Home'

export default Home