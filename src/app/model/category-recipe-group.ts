import { ICategoryRecipeGroup } from '../interfaces/search/category-recipe-group';
import { CategoryRecipe } from './category-recipe';

export class CategoryRecipeGroup implements ICategoryRecipeGroup {
  disabled: boolean;
  name: string;
  result: CategoryRecipe[];
}
