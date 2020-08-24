import { ICategoryRecipe } from './category-recipe';

export interface ICategoryRecipeGroup {
  disabled?: boolean;
  name: string;
  result: ICategoryRecipe[];
}
