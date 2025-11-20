import { useParams, useNavigate } from "react-router-dom"
import Wrapper from "../../components/general/Wrapper"
import BottomNav from "../../components/general/BottomNav"
import { recipes } from "../../mocks/recipes"
import { RecipesHeader } from "../../components/recipes/HeaderRecipe"

export default function RecipeDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = recipes.find((item) => item.id === id)

  if (!recipe) {
    return (
      <Wrapper>
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Receita não encontrada
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-5 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </Wrapper>
    )
  }

  return (
    <>
    <Wrapper>
      <RecipesHeader />
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-xl font-bold text-gray-900">{recipe.title}</h1>
        </div>

        <div className="px-4 pb-6 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 h-48 rounded-xl overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ingredientes:</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-3">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {recipe.instructions && (
          <div className="px-4 pb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Como fazer:</h2>
            <div className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <p key={index} className="text-sm text-gray-700 leading-relaxed">
                  {instruction}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="px-4 pb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </div>
    </Wrapper>
    <BottomNav />
    </>
  )
}
