"use client"
import Image from "next/image";
import Link from "next/link";
import NavBarPage from "./components/NavBar";
import SectionPage from "./components/HeroSection";
import CategoryPage from "./components/CategorySection";
import PromoPage from "./components/PromoSection";
import AboutPage from "./components/AboutSection";
import React, { useState } from "react";
import MenuPage from "./components/MenuSection";
import ReviewPage from "./components/ReviewSection";
import ContactPage from "./components/ContactSection";
import FooterPage from "./components/FooterSection";
import ArrowPage from "./components/ArrowFunction";



export default function Home() {
return (
   <main>
    <NavBarPage/>
    <section>
   <SectionPage/>
   </section>
   <section>
   <CategoryPage/>
   </section>
   <section>
   <PromoPage/>
   </section>
   <section id="about">
   <AboutPage/>
   </section>
   <section id="menu">
   <MenuPage/>
    </section>
    <section id="review" className="bg-primaryColorLight py-20 dark:bg-darklighColor">
     <ReviewPage/>
    </section>
    <section id="contact" className="bg-secondaryColor py-16">
       <ContactPage/>
    </section>
    <footer>
      <section className="footer">
         <FooterPage/>
     </section>
    </footer>
    <ArrowPage/>

   </main>
  );
}
