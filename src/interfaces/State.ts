import type ICategory from "./ICategory";
import type { Page } from "./Page";

export default interface State {
    ingredients: string[];
    categories: ICategory[];
    content: Page;
}