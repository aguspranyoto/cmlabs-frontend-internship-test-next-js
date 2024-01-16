import Breadcrumbs from "@/components/Breadcrumbs";
import { getMealsDetail } from "@/lib/fetcher";
import Image from "next/image";
import React, { FC } from "react";

const MealsDetailPage = async ({
  params,
}: {
  params: { categoryDetail: string; mealDetail: string };
}) => {
  const data = await getMealsDetail(params.mealDetail);

  const generateRecipeList = () => {
    const mealDetailContent = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data?.[`strIngredient${i}`];
      const measure = data?.[`strMeasure${i}`];
      if (ingredient && measure) {
        mealDetailContent.push(
          <li key={i}>
            - {measure} {ingredient}
          </li>
        );
      }
    }
    return mealDetailContent;
  };

  return (
    <main className="mb-6">
      <Breadcrumbs link={params.categoryDetail} extraLink={data.strMeal} />
      <p className="mb-3 text-md font-bold text-orange-600">{data.strMeal}</p>
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 ">
        <div className="w-auto md:w-1/2 ">
          <div className="relative shadow-lg overflow-hidden rounded-2xl">
            <Image
              className="w-full h-full object-cover hover:scale-125 transition-transform duration-300 ease-in-out"
              src={data.strMealThumb}
              alt={data.strMeal}
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="w-auto md:w-1/2">
          <div className="mb-6">
            <p className="text-3xl font-bold mb-3">Instructions: </p>
            <p>{data.strInstructions}</p>
          </div>
          <p className="text-3xl font-bold mb-3">Recipes: </p>
          <ul>{generateRecipeList()}</ul>
        </div>
      </div>
      <iframe
        className="w-full md:w-2/3 md:mx-auto md:px-0 mb-6"
        width="420"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${
          data.strYoutube.split("v=")[1]
        } `}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default MealsDetailPage;
