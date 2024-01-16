import Breadcrumbs from "@/components/Breadcrumbs";
import CardItem from "@/components/CardItem";
import { getCategories } from "@/lib/fetcher";
import React from "react";

const CategoryPage = async () => {
  const categories = await getCategories();

  return (
    <main className="mb-6">
      <Breadcrumbs link="" />
      <div className="w-full gap-4 flex flex-wrap justify-center items-center">
        {categories.map((category) => (
          <CardItem
            key={category.strCategory}
            title={category.strCategory}
            link={`/category/${category.strCategory}`}
            image={category.strCategoryThumb}
          />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
