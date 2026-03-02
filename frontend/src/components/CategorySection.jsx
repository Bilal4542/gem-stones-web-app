import React from "react";
import CategoryCard from "./CategoryCard";
import categoryImg1 from "../assets/category1.jpg";
import categoryImg2 from "../assets/category2.jpg";
import categoryImg3 from "../assets/category3.jpg";

const categortyData = [
  {
    image: categoryImg1,
    title: "Mineral Specimen",
    desc: "Collectible mineral specimens from renowned localities.",
    btn: "Explore Specimen",
  },
  {
    image: categoryImg2,
    title: "Cut Gemstones",
    desc: "Precision-cut gems for jewelry & collectors.",
    btn: "Shop Cuts",
  },
  {
    image: categoryImg3,
    title: "Crystal Formation",
    desc: "Display-ready crystals & points.",
    btn: "Explore Crystal",
  },
];

const CategorySection = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-28">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categortyData.map((item) => (
           <div className="w-full">
             <CategoryCard image={item.image} title={item.title} desc={item.desc} btn={item.btn} />
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
