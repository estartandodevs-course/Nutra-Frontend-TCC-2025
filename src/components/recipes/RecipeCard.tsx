import { useNavigate } from "react-router-dom"
import type { RecipeCardProps } from "../../types/recipescard"

export function RecipeCard({ id, title, image, ingredients }: RecipeCardProps) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all p-4">
      <div className="pr-4 pl-2 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-36 h-36 object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>

        <div className="mb-3">
          <p className="text-sm text-gray-600 font-medium mb-1">Ingredientes:</p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            {ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => navigate(`/receitas/${id}`)}
          className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors cursor-pointer"
        >
          Ver receita completa
        </button>
      </div>
    </div>
  )
}
