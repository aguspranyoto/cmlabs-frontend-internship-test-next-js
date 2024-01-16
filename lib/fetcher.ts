import axios from "axios";

export const getCategories: () => Promise<categoryType[]> = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getCategoryDetail: (
  strCategory: string
) => Promise<categoryDetailType[]> = async (strCategory) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
    );

    return response.data.meals;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getMealsDetail: (
  idMeal: string
) => Promise<mealsDetailType> = async (idMeal) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );

    return response.data.meals[0];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
