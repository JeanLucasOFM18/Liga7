import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Inscription() {

    const titleRef = useRef(null);

    useEffect(() => {
        const el = titleRef.current;

        gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
            },
        }
        );

    }, []);

    return(
        <section className="h-screen pt-25">
            <h2 ref={titleRef} className="font-alfa text-6xl lg:text-8xl text-[#042222] mb-10">Únete a la mejor liga</h2>
            <div className="flex lg:flex-row flex-col w-full bg-[#FFE4D0] rounded-2xl">
                <img src="https://i.postimg.cc/cJBMBG7R/image.avif" alt="Inscripciones" className="h-auto w-[500px] lg:block hidden"/>
                <div className="flex flex-col justify-center text-[#042222] gap-3 text-start p-5">
                    <h3 className="text-4xl lg:text-8xl font-alfa mt-10 lg:mt-0 md:text-6xl">Inscripción</h3>
                    <p className="font-poet lg:text-xl text-lg md:text-xl">¡Haz historia en la cancha! Registra tu equipo y compite por la gloria.</p>
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-800 text-white transition duration-300 px-2 py-2 rounded-2xl w-60 font-poet">Registrarse</button>
                </div>
                <img src="https://i.postimg.cc/cJBMBG7R/image.avif" alt="Inscripciones" className="h-auto w-[500px] block lg:hidden mt-[-20px]"/>
            </div>
        </section>
    )
}

export default Inscription;