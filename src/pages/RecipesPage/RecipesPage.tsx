import Wrapper from "../../components/General/Wrapper"
import { RecipesHeader }  from "../../components/Recipes/HeaderRecipe"
import { RecipeCard } from "../../components/Recipes/RecipeCard"
import  BottomNav  from "../../components/General/BottomNav"
import { recipes } from "../../mocks/recipes";

export default function RecipesPage() {
  return (
    <>
    <Wrapper>
      <RecipesHeader />
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Todas as receitas</h1>
        </div>

        <div className="px-4 pb-6 space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </Wrapper>
    <BottomNav />
    </>
  )
}
