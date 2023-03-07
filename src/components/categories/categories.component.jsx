import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./categories.style";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
