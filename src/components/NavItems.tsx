/**
 * Represents the navigation items component.
 * This component renders a list of navigation items based on the PRODUCT_CATEGORIES constant.
 * It allows the user to open and close categories by clicking on them.
 * It also handles closing all categories when the user clicks outside of the navigation items.
 */
"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  // State to manage the index of the currently active category
  // default value is null, which means no category is active
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;
  // if user click outside of the nav items, close all nav items
  const navRef = useRef<HTMLDivElement | null>(null);
  //   custom hook to handle click outside of the nav items
  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        // Callback function to handle opening and closing of categories
        const handleOpen = () => {
          if (activeIndex === i) {
            // If the clicked category is already active, close it
            setActiveIndex(null);
          } else {
            // If a different category is clicked, set it as active
            setActiveIndex(i);
          }
        };

        // Check if the current category is open or closed
        const isOpen = i === activeIndex;

        // Render individual NavItem component for each category
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

// Exporting the NavItems component as the default export
export default NavItems;
