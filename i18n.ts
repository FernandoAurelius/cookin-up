import { createI18n } from 'vue-i18n';

const placeholders = {
  en: {
    headerPhrase1: "A feast of ideas to",
    headerPhrase2: "awaken the chef inside you!",
    headerSubtitle: "Explore new recipes every day with ingredients within your reach!",
    yourListText: "Your list:",
    emptyYourList: "Your list is empty, select ingredients to start.",
    selectIngredientsText: "Select below the ingredients you want to use in this recipe:",
    selectIngredientsTip: "*Note: we consider that you have salt, pepper and water at home.",
    showRecipesTitle: "Recipes",
    showRecipesResultsText: "Results found:",
    showRecipesOptionsText: "See the options of recipes that we found with the ingredients you have!",
    showRecipesNotFound: "Ops! We couldn't find any result for your combination 😿. Maybe you should try again?",
    mainButtonSearchRecipes: "Search recipes!",
    mainButtonEditList: "Edit list"
  },
  pt: {
    headerPhrase1: "Um banquete de ideias para",
    headerPhrase2: "acordar o chef dentro de você!",
    headerSubtitle: "Explore novas receitas todos os dias com ingredientes dentro do seu alcance!",
    yourListText: "Sua lista:",
    emptyYourList: "Sua lista está vazia, selecione ingredientes para começar.",
    selectIngredientsText: "Selecione abaixo os ingredientes que você deseja usar nesta receita:",
    selectIngredientsTip: "*Nota: consideramos que você tem sal, pimenta e água em casa.",
    showRecipesTitle: "Receitas",
    showRecipesResultsText: "Resultados encontrados:",
    showRecipesOptionsText: "Veja as opções de receitas que encontramos com os ingredientes que você possui!",
    showRecipesNotFound: "Ops! Não conseguimos encontrar nenhum resultado para sua combinação 😿. Talvez você deva tentar de novo?",
    mainButtonSearchRecipes: "Buscar receitas!",
    mainButtonEditList: "Editar lista"

  },
}

const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'pt',
  placeholders,
});

export default i18n;
