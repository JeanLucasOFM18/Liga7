import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

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

    const images = [
        "https://i.postimg.cc/tRxNCc7N/image.avif",
        "https://i.postimg.cc/7h872xbM/image.avif",
        "https://i.postimg.cc/ncTjHKK1/image.avif",
        "https://i.postimg.cc/vH8TSgRx/image.avif",
        "https://i.postimg.cc/JnmMDvMH/image.avif",
        "https://i.postimg.cc/PxtnrDQm/image.avif",
    ];

    return (
        <section className="min-h-screen px-6 pt-25">
        <h2 ref={titleRef} className="font-alfa text-6xl lg:text-8xl text-[#042222] mb-12 text-center">Galería</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg group">
                <img
                src={src}
                alt={`Galería ${index}`}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            ))}
        </div>
        </section>
    );
}

export default Gallery;