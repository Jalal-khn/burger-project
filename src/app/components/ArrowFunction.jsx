import { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function ArrowPage() {

    useEffect(() => {
        const scrollBtn = document.getElementById("scroll");

        const ScrollUp = () => {
            if (window.scrollY >= 250) {
                scrollBtn.classList.remove("-bottom-1/2");
                scrollBtn.classList.add("bottom-4");
            } else {
                scrollBtn.classList.add("-bottom-1/2");
                scrollBtn.classList.remove("bottom-4");
            }
        };

        window.addEventListener('scroll', ScrollUp);

        
        return () => {
            window.removeEventListener('scroll', ScrollUp);
        };
    }, []);

    return (
        <main>
            <Link id="scroll" href="#" className="fixed bg-secondaryColor right-4 -bottom-1/2 shadow-sm inline-block px-2 py-2
    rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200">
                <FaArrowUp />
            </Link>
        </main>
    );
}
