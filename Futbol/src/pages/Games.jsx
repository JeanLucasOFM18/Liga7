import GameCard from "../components/GameCard";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const matches = [
  {
    teamA: { name: "Real Madrid", img: "https://i.postimg.cc/MTcHKyGn/image.png" },
    teamB: { name: "Real Sociedad", img: "https://i.postimg.cc/mrTkkgvT/image.png" },
    date: "Sábado, 24 may, 16:15 h",
    location: "Club Oriente",
  },
  {
    teamA: { name: "Al Hilal", img: "https://i.postimg.cc/Df9mXTH4/image.png" },
    teamB: { name: "Pachuca", img: "https://i.postimg.cc/vm2ZHF5B/image.png" },
    date: "Sábado, 24 may, 18:45 h",
    location: "Club Oriente",
  },
  {
    teamA: { name: "Valencia", img: "https://i.postimg.cc/CxmFmTPN/image.png" },
    teamB: { name: "Salzburgo", img: "https://i.postimg.cc/RFcrRFsP/image.png" },
    date: "Sábado, 24 may, 20:30 h",
    location: "Club Oriente",
  },
];

const Games = () => {

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
        <section className="h-screen pt-25">
            <h2 ref={titleRef} className='font-alfa text-6xl lg:text-8xl text-[#042222] mb-10'>Próximos Partidos</h2>
            <div className='flex lg:flex-row flex-col gap-5 justify-between px-6'>
                {matches.map((match, index) => (
                    <GameCard key={index} {...match} />
                ))}
            </div>
        </section>
    )

}

export default Games;