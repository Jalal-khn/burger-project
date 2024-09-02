"use client";
import { CircleX, Moon, SquareMenu } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa6";

export default function NavBarPage() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home"); // Initialize activeSection

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Code that interacts with document or localStorage should be placed here
            const html = document.querySelector("html");
            const savedMode = localStorage.getItem("mode");
            if (savedMode === "dark") {
                html.classList.add("dark");
                setDarkMode(true);
            }
        }
    }, []); // Run this effect only on mount

    const toggleTheme = () => {
        if (typeof window !== "undefined") {
            const html = document.querySelector("html");
            if (darkMode) {
                html.classList.remove("dark");
                localStorage.setItem("mode", "light");
                setDarkMode(false);
            } else {
                html.classList.add("dark");
                localStorage.setItem("mode", "dark");
                setDarkMode(true);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const sections = ["home", "about", "menu", "review", "contact"];
                let closestSection = "home";

                sections.forEach((sectionId) => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offset = Math.abs(section.getBoundingClientRect().top);
                        if (offset < window.innerHeight / 2) {
                            closestSection = sectionId;
                        }
                    }
                });

                setActiveSection(closestSection); // Update activeSection
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const isActive = (id) => (activeSection === id ? "text-secondaryColor" : ""); // Access activeSection state

    return (
        <>
            <main>
                <header className="bg-primarycolor fixed top-0 left-0 w-full z-50 dark:bg-darkColor" id="header">
                    <nav className="container relative h-14 flex justify-between items-center">
                        <div>
                            <Link href="/" className="text-2xl uppercase font-serif">
                                bur<span className="text-secondaryColor font-mono">ger</span>
                            </Link>
                        </div>
                        <ul className="hidden lg:flex flex-col text-center gap-5 lg:flex-row dark:bg-darkColor">
                            <li>
                                <Link href="#home" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("home")}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("about")}`}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#menu" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("menu")}`}>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="#review" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("review")}`}>
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("contact")}`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {open && (
                            <div className="absolute top-0 left-0 w-full py-14 bg-primarycolor border-b border-secondaryColor" id="nav-menu">
                                <ul className="flex flex-col text-center gap-5 lg:flex-row">
                                    <li>
                                        <Link href="#home" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("home")}`}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("about")}`}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#menu" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("menu")}`}>
                                            Menu
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#review" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("review")}`}>
                                            Reviews
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#contact" className={`hover:text-secondaryColor ease-in duration-200 ${isActive("contact")}`}>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <div className="absolute top-[0.7rem] right-4 text-2xl">
                                    <CircleX className="cursor-pointer" onClick={toggleMenu} aria-label="Close menu" />
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-5">
                            {darkMode ? (
                                <FaSun className="cursor-pointer ml-4 text-xl hover:text-secondaryColor duration-300" aria-label="Toggle theme" id="theme-toggle" onClick={toggleTheme} />
                            ) : (
                                <Moon className="cursor-pointer ml-4 text-xl hover:text-secondaryColor duration-300" aria-label="Toggle theme" id="theme-toggle" onClick={toggleTheme} />
                            )}
                            <div>
                                <SquareMenu className="lg:hidden cursor-pointer text-xl" onClick={toggleMenu} aria-label="Open menu" />
                            </div>
                        </div>
                    </nav>
                </header>
            </main>
        </>
    );
}

