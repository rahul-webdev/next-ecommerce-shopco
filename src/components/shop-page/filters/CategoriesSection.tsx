import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import data from "@/data/index.json";

type Category = {
  title: string;
  slug: string;
};

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {(data.categories as Category[]).map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
