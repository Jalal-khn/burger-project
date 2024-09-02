import Image from "next/image";
import Link from "next/link";


export default function CategoryPage(){
    return(
        <div className="container flex flex-col gap-5 md:flex-row"> 
        <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
        <div className="basis-1/3 relative">
          <Image src="/burger2.png" alt="this is image" className="absolute w-28 -botttom-4 -left-2"
          height={1000}
          width={1000}
          />
        </div>
        <div>
          
        <div className="mb-2">
          <h4 className="card__title">FOOD</h4>
        <p className="text-xs">Lorum ispsum color sit</p>
        </div>
        <Link href="" className="text-blackColor cursor-pointer">Buy Online</Link>
        </div>
        </div>
        <div className="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
        <div className="basis-1/3 relative">
          <Image src="/snack.png" alt="this is image" className="absolute w-28 botttom-5 -left-2"
          height={1000}
          width={1000}
          />
        </div>
        <div>
          
        <div className="mb-2">
          <h4 className="card__title">SNACK</h4>
        <p className="text-xs">Lorum ispsum color sit</p>
        </div>
        <Link href="" className="text-secondaryColor cursor-pointer">Buy Online</Link>
        </div>
        </div>
        <div className="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
        <div className="basis-1/3 relative">
          <Image src="/coke.png" alt="this is image" className="absolute w-28 -botttom-4 -left-2"
          height={1000}
          width={1000}
          />
        </div>
        <div>
          
        <div className="mb-2">
          <h4 className="card__title">BEVERAGE</h4>
        <p className="text-xs">Lorum ispsum color sit</p>
        </div>
        <Link href="" className="text-secondaryColor cursor-pointer">Buy Online</Link>
        </div>
        </div>
        </div>
    )
}