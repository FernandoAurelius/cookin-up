import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

export async function getCategories(): Promise<ICategory[]> {
    return await fetch(
      "https://gist.githubusercontent.com/FernandoAurelius/a85385f5af0ad675e1596430a2daa2bd/raw"
    )
    .then(
      (response) => response.json()
    );
}

export async function getRecipes(): Promise<IRecipe[]> {
  return await fetch(
    "https://gist.githubusercontent.com/FernandoAurelius/9c36cddb981b351fbe9454c8a0f24e57/raw"
  )
  .then(
    (response) => response.json()
  )
}
