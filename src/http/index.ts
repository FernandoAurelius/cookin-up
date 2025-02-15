import type ICategory from "@/interfaces/ICategory";

export async function getCategories(): Promise<ICategory[]> {
    return await fetch(
      // Switched to my personal gist to get the translated categories 
      "https://gist.githubusercontent.com/FernandoAurelius/a85385f5af0ad675e1596430a2daa2bd/raw"
    )
    .then(
      (response) => response.json()
    );
}
