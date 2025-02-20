import type ICategory from "./ICategory";

export default interface State {
    ingredients: string[];
    categories: ICategory[];
}