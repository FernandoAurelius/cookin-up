import type ICategory from "./ICategory";
import type IRecipe from "./IRecipe";
import type { Page } from "./Page";

export default interface State {
    ingredients: string[];
    categories: ICategory[];
    recipes: IRecipe[];
    content: Page;
}
