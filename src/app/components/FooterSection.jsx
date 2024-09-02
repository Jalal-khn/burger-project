import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterPage() {
    return (
        <main>
            <div className="container">
                <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <div className="space-y-3">
                            <Link href="#" className="text-4xl font-serif uppercase">
                                bur<span className="text-secondaryColor font-mono">ger</span>
                            </Link>
                            <p className="text-xs">
                                Indulge in the ultimate burger experience with our gourmet creations,
                                crafted to perfection with the freshest, highest-quality ingredients.
                                Each bite delivers a mouthwatering explosion of flavors, from succulent,
                                juicy patties to crisp, vibrant toppings.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg uppercase font-serif">support</h3>
                            <Link href="#" className="text-sm hover:text-secondaryColor">FAQ&apos;s</Link>
                            <Link href="#" className="text-sm hover:text-secondaryColor">Privacy Policy</Link>
                            <Link href="#" className="text-sm hover:text-secondaryColor">Terms and Conditions</Link>
                            <Link href="#" className="text-sm hover:text-secondaryColor">Contact</Link>
                        </div>
                    </li>
                    <li className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif uppercase">phone</h3>
                            <p className="flex items-center text-xs gap-2">
                                <FaPhoneAlt className="text-lg text-secondaryColor" />
                                +92 3435309099
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif uppercase">email</h3>
                            <p className="flex items-center text-xs gap-2">
                                <FaEnvelopeOpen className="text-lg text-secondaryColor" />
                                jalalkhan8704243@gmail.com
                            </p>
                        </div>
                    </li>
                    <li className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif uppercase">address</h3>
                            <p className="flex items-center text-xs gap-2">
                                <FaMapMarkerAlt className="text-lg text-secondaryColor" />
                                address goes here
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-serif uppercase">follow us</h3>
                            <div className="space-x-3 flex">
                                <FaFacebookF className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                                <FaTwitter className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                                <RiInstagramFill className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darklighColor py-5 md:flex-row md:justify-between">
                    <p className="paragraph">Burger Template Kit By Light Code</p>
                    <p className="paragraph">Copyright © 2024. All rights reserved</p>
                </div>
            </div>
        </main>
    );
}
