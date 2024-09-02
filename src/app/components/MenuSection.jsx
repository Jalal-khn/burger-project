import Image from "next/image";
import React, { useState } from "react";
import { products } from "@/data/data";

export default function MenuPage() {
    const [category, setCategory] = useState("All");

    
    const allProducts = products.flatMap(categoryItem => 
        categoryItem.menu.map(item => ({ ...item, category: categoryItem.category }))
    );

    const filterData = (name) => {
        setCategory(name);
    }

    const filteredProducts = category === "All" 
        ? allProducts 
        : allProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());

    return (
        <main>
            <div>
                <div className="mx-w-md mx-auto text-center">
                    <h2 className="section__title">OUR BEST MENU</h2>
                    <div className="separater mx-auto"></div>
                    <p className="paragraph">
                        Indulge in the ultimate burger experience with our gourmet creations,
                        crafted to perfection with the freshest, highest-quality ingredients.
                    </p>
                    <div className="tabs_wrap">
                    <ul className="flex flex-wrap justify-center gap-3 py-10">
    <li 
        onClick={() => filterData("All")} 
        className={`btn ${category === "All" ? "bg-secondaryColor" : "bg-primaryColorLight dark:bg-darklighColor"} `}
    >
        All
    </li>
    <li 
        onClick={() => filterData("food")} 
        className={`btn ${category === "food" ? "bg-secondaryColor" : "bg-primaryColorLight dark:bg-darklighColor"} `}
    >
        Food
    </li>
    <li 
        onClick={() => filterData("snack")} 
        className={`btn ${category === "snack" ? "bg-secondaryColor" : "bg-primaryColorLight dark:bg-darklighColor"} `}
    >
        Snack
    </li>
    <li 
        onClick={() => filterData("beverages")} 
        className={`btn ${category === "beverages" ? "bg-secondaryColor" : "bg-primaryColorLight dark:bg-darklighColor"} `}
    >
        Beverages
    </li>
</ul>

                    </div>
                </div>
                <div>
                    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <div className="h-56 dark:bg-darklighColor grid place-items-center bg-primaryColorLight rounded-3xl
                                    hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                                    <Image 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-40 hover:scale-110 ease-linear duration-200
                                        md:w-48 lg:w-24"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="pt-5">
                                    <div className="mb-2">
                                        <h4 className="card__title">{product.title}</h4>
                                        <p className="paragraph">{product.description}</p>
                                    </div>
                                    <p className="text-secondaryColor">$42.00</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

