import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

export async function getCategories(language: string): Promise<ICategory[]> {
    switch(language) {
      case 'en':
        return await fetch(
          "https://gist.githubusercontent.com/FernandoAurelius/a85385f5af0ad675e1596430a2daa2bd/raw"
        )
        .then(
          (response) => response.json()
        );
      case 'pt':
        return await fetch(
          "https://gist.githubusercontent.com/FernandoAurelius/63d01d6083366bd9d9c80d360a04eae6/raw"
        )
        .then(
          (response) => response.json()
        );
      default:
        // Default to English if language is not supported
        return await fetch(
          "https://gist.githubusercontent.com/FernandoAurelius/a85385f5af0ad675e1596430a2daa2bd/raw"
        )
        .then(
          (response) => response.json()
        );
    }
}

export async function getRecipes(language: string): Promise<IRecipe[]> {
  switch(language) {
    case 'en':
      return await fetch(
        "https://gist.githubusercontent.com/FernandoAurelius/9c36cddb981b351fbe9454c8a0f24e57/raw"
      )
      .then(
        (response) => response.json()
      )
    case 'pt':
      return await fetch(
        "https://gist.githubusercontent.com/FernandoAurelius/fc3c756b77826583a32b6c9e6d60526d/raw"
      )
      .then(
        (response) => response.json()
      );
    default:
      // Default to English if language is not supported
      return await fetch(
        "https://gist.githubusercontent.com/FernandoAurelius/9c36cddb981b351fbe9454c8a0f24e57/raw"
      )
      .then(
        (response) => response.json()
      );
  }
}
