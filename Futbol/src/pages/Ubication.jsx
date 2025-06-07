import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Ubication() {

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

    return (
        <section className="min-h-screen px-6 pt-25 text-[#042222]">
            <h2 ref={titleRef} className="font-alfa text-5xl md:text-6xl lg:text-8xl mb-12 text-center">Ubicación</h2>
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFE4D0]">
                <iframe
                    title="Mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8473963255965!2d-70.5304743!3d-33.427222699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf0a8f4a5023%3A0x6ee4b59994f4dc5c!2sLiga%20B!5e0!3m2!1sen!2scl!4v1741311516141!5m2!1sen!2scl"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[400px]"
                />
            </div>
        </section>
    );
}

export default Ubication;