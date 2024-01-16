import Breadcrumbs from "@/components/Breadcrumbs";
import { getCategoryDetail } from "@/lib/fetcher";
import CardItem from "@/components/CardItem";
const CategoryDetailPage = async ({
  params,
}: {
  params: { categoryDetail: string };
}) => {
  const link = params.categoryDetail;
  const categoryDetails = await getCategoryDetail(link);

  return (
    <main className="mb-6">
      <Breadcrumbs link={link} />
      <div className="w-full gap-4 flex flex-wrap justify-center items-center">
        {categoryDetails.map((category) => (
          <CardItem
            key={category.idMeal}
            title={category.strMeal}
            link={`/category/${link}/${category.idMeal}`}
            image={category.strMealThumb}
          />
        ))}
      </div>
    </main>
  );
};

export default CategoryDetailPage;
