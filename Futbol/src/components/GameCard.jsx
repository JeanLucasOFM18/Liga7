import { CalendarDays, MapPin } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const GameCard = ({ teamA, teamB, date, location }) => {

    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
            trigger: el,
            start: 'top 80%', // cuando el top del elemento llegue al 80% de la pantalla
            toggleActions: 'play none none none', // solo anima una vez
            },
        }
        );
    }, []);

    return (
        <div ref={cardRef} className="flex flex-col bg-[#042222] rounded-2xl gap-6">
            <div className="flex p-10 justify-center">
                <div className="flex flex-col gap-2">
                    <img src={teamA.img} alt={teamA.name} className="object-cover w-[100px] h-auto"/>
                    <p className='text-sm'>{teamA.name}</p>
                </div>
                <img src="https://i.postimg.cc/pVzVGV5M/image.avif" alt="Versus" className="object-cover w-[100px] h-auto"/>
                <div className="flex flex-col gap-2">
                    <img src={teamB.img} alt={teamB.name} className="object-cover w-[100px] h-auto"/>
                    <p className='text-sm'>{teamB.name}</p>
                </div>
            </div>
            <div className="bg-[#FFE4D0] rounded-2xl text-start text-[#042222] font-poet p-5">
                <p className="text-gray-600 text-lg mb-2">Futbol</p>
                <p className="text-4xl">Liga7</p>
                <p className="text-gray-700 text-xl mb-4">Jornada 1</p>
                <div className='flex text-gray-600 gap-2 mb-2'>
                    <CalendarDays />
                    <p>{date}</p>
                </div>
                <div className='flex text-gray-600 gap-2'>
                    <MapPin />
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard;