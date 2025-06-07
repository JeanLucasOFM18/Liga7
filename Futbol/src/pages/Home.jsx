import { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-image", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".home-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".home-image-mobile", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="flex h-screen items-center justify-center px-6 pt-10">
      <div className="flex flex-col lg:flex-row bg-[#FFE4D0] rounded-2xl text-[#042222] gap-5 shadow-xl">
        <img src="https://i.postimg.cc/BvqV2pWV/image.avif" alt="Imagen Home" className="hidden md:block object-cover w-full max-w-[800px] h-auto rounded-l-2xl home-image"/>
        <img src="https://i.postimg.cc/BvqV2pWV/image.avif" alt="Imagen Home" className="block md:hidden object-cover w-full max-w-[400px] h-auto rounded-t-2xl home-image-mobile"/>
        <div className="flex flex-col lg:ml-0 mx-10 mb-5 lg:mb-0 text-start lg:justify-center lg:items-center gap-3 lg:gap-4 lg:text-center home-content">
          <h1 className="font-alfa lg:text-8xl text-6xl md:text-7xl">Liga7</h1>
          <p className="font-poet lg:text-3xl md:text-2xl text-xl">Donde los equipos se convierten en leyendas</p>
          <button className="font-poet text-base lg:text-xl md:text-lg bg-green-600 hover:bg-green-800 cursor-pointer rounded-xl py-2 px-1 lg:px-6 lg:py-3 transition duration-300 text-white md:w-60">Inscribe tu equipo</button>
        </div>
      </div>
    </section>
  );
}
export default Home;