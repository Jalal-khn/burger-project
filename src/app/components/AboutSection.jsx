import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadScrollReveal } from "@/actions/script"; 
import { Check } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    loadScrollReveal().then((ScrollReveal) => {
      const sr = ScrollReveal();

      
      sr.reveal('.section__title', {
        duration: 1200,
        origin: 'left',
        distance: '100px',
        easing: 'ease-in-out',
        reset: true,
      });

      sr.reveal('.paragraph', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        easing: 'ease-in-out',
        opacity: 0,
        reset: true,
      });

      sr.reveal('.rounded-lg', {
        duration: 1500,
        origin: 'bottom',
        distance: '75px',
        easing: 'ease-in-out',
        scale: 0.9,
        reset: true,
      });

      sr.reveal('.btn-primary', {
        duration: 800,
        origin: 'top',
        distance: '30px',
        easing: 'ease-in-out',
        opacity: 0,
        reset: true,
      });

    }).catch((error) => {
      console.error('Error loading ScrollReveal:', error);
    });
  }, []);

  return (
    <main>
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Image
            src="/aboutimage.jpg"
            alt="This is an image"
            className="rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE
          </h2>
          <div className="separater"></div>
          <p className="paragraph">
            Indulge in the ultimate burger experience with our gourmet creations,
            crafted to perfection with the freshest, highest-quality ingredients.
            Each bite delivers a mouthwatering explosion of flavors, from succulent,
            juicy patties to crisp, vibrant toppings.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="flex text-xs text-paragraphColor items-center gap-1">
              <Check className="text-secondaryColor w-4 font-bold" />
              Best Price
            </li>
            <li className="flex text-xs text-paragraphColor items-center gap-1">
              <Check className="text-secondaryColor w-4 font-bold" />
              Fresh Ingredients
            </li>
            <li className="flex text-xs text-paragraphColor items-center gap-1">
              <Check className="text-secondaryColor w-4 font-bold" />
              Best Service
            </li>
            <li className="flex text-xs text-paragraphColor items-center gap-1">
              <Check className="text-secondaryColor w-4 font-bold" />
              Health Protocol
            </li>
          </ul>
          <Link className="btn btn-primary" href="">
            About Us
          </Link>
        </div>
      </div>
    </main>
  );
}
