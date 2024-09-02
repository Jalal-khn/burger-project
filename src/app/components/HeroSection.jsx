import { useEffect } from "react";
import { loadScrollReveal } from "@/actions/script";
import { FaUtensils } from "react-icons/fa"; 
import Image from "next/image";
import { BsFillDropletFill } from "react-icons/bs";
import { IoLeafSharp } from "react-icons/io5";
import Link from "next/link";

export default function SectionPage() {
  useEffect(() => {
    loadScrollReveal().then((ScrollReveal) => {
      const sr = ScrollReveal();

      sr.reveal('.animate-movingY', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false,
      });

      sr.reveal('.animate-fadeIn', {
        opacity: 0,
        duration: 1000,
        easing: 'ease-in-out',
        reset: false,
      });
    }).catch((error) => {
      console.error('Error loading ScrollReveal:', error);
    });
  }, []);

  return (
    <div className="container flex flex-col items-center gap-10 md:flex-row">
      <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
        <Image
          src="/png1.png"
          alt=""
          className="w-60 md:w-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="text-center md:basis-1/2 md:text-start lg:basis-2/5 animate-fadeIn">
        <h1 className="home__title">
          HAPPY TUMMY WITH TASTY BURGER.
        </h1>
        <div className="separater mx-auto md:mx-0"></div>
        <p className="paragraph">
          Indulge in the ultimate burger experience with our gourmet creations,
          crafted to perfection with the freshest, highest-quality ingredients.
          Each bite delivers a mouthwatering explosion of flavors, from succulent,
          juicy patties to crisp, vibrant toppings.
        </p>
        <div className="text-base flex justify-center items-center gap-7 py-10 md:justify-start md:gap-20 animate-movingY">
          <div className="text-center">
            <FaUtensils className="text-secondaryColor text-4xl m-1" />
            <p>Delicious</p>
          </div>
          <div>
            <BsFillDropletFill className="text-secondaryColor text-4xl m-1" />
            <p>Fresh</p>
          </div>
          <div>
            <IoLeafSharp className="text-secondaryColor text-4xl m-1" />
            <p>Organic</p>
          </div>
        </div>
        <Link href="" className="btn btn-primary animate-fadeIn">
          Learn more
        </Link>
      </div>
    </div>
  );
}
