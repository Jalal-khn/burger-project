import Image from "next/image";
import Link from "next/link";


export default function PromoPage() {
    return(
        <main>
             <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
      <div className="bg-primaryColorLight dark:bg-darklighColor flex flex-col p-5 rounded-lg md:flex-row md:items-center
      lg:flex-row-reverse lg:flex-1">
        <Image src="/png1.png" alt="this is image" className="w-40 mx-auto hover:animate-movingY md:mx-5"
        width={1000}
        height={1000}
        />
        <div className="space-y-2 pt-5 md:pt-0">
          <p className="text-sm text-secondaryColor">payday promo</p>
          <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK </h3>
          <p className="paragraph">Loram ispsum color sit amet,consectutor adipsimg elit.</p>
          <Link className="text-sm text-secondaryColor"
           href="">Buy Online</Link>
        </div>
      </div>
      <div className="bg-primaryColorLight dark:bg-darklighColor flex flex-col p-5 rounded-lg md:flex-row md:items-center
      lg:flex-row-reverse lg:flex-1">
        <Image src="/coke.png" alt="this is image" className="w-40 mx-auto hover:animate-movingY md:mx-5"
        width={1000}
        height={1000}
        />
        <div className="space-y-2 pt-5 md:pt-0">
          <p className="text-sm text-secondaryColor">payday promo</p>
          <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK </h3>
          <p className="paragraph">Loram ispsum color sit amet,consectutor adipsimg elit.</p>
          <Link className="text-sm text-secondaryColor"
           href="">Buy Online</Link>
        </div>
      </div>
    </div>
        </main>
    )
}