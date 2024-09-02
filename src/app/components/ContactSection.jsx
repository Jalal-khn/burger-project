import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";


export default function ContactPage() {
    return(
        <main>
            <div className="container flex flex-col md:items-center gap-5 md:flex-row">
                <div className="space-y-4 md:flex-1">
                    <h2 className="section__title text-blackColor font-bold">GET EXCLUSIVE UPDATE</h2>
                    <p className="text-sm">Loram ispsum color sit amet,consectutor adipsimg elit.</p>
                </div>
               <div className="flex flex-col gap-3 md:flex-row md:flex-1">
               <input type="text" placeholder="Email address"
               className="p-2 text-blackColor rounded-lg outline-none md:w-full" />
                <Link href="" className="flex items-center justify-center gap-2 btn  
                bg-blackColor hover:opacity-75">
                <FaPaperPlane /> 
                subscribe
                </Link>
               </div>
            </div>
        </main>
    )
}