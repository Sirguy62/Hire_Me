"use client";

import { useState } from "react";
import { portfolioItems } from "@/app/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioGrid() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className="flex flex-wrap lg:gap-12 justify-center items-center gap-5 px-6 rounded-xl py-5">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            onOpen={() => setActiveItem(item)}
          />
        ))}
      </div>

      {activeItem && (
        <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
}




  ;